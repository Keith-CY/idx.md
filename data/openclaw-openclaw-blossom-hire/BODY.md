---
name: blossom-hire
version: 3.0.0
description: Post jobs and hire people, or search for local work and apply. Connects employers and job-seekers via the Blossom marketplace.
---

# Blossom Hire

| | |
|---|---|
| **Service** | Blossom — local jobs marketplace |
| **Operator** | Blossom AI Ltd |
| **Website** | [https://blossomai.org](https://blossomai.org) |
| **Privacy** | [https://blossomai.org/privacypolicy.html](https://blossomai.org/privacypolicy.html) |
| **API host** | `hello.blossomai.org` |

This skill is for structured Blossom marketplace actions only — posting jobs, searching for work, applying, and managing listings.

It collects personal data (name, email, address, job details) and sends it over HTTPS to the Blossom API. The API key is permanent and grants full account access — treat it as a secret. No data is stored locally.

**Data boundary rules:**
- Only send the minimum data needed for the current Blossom action.
- Never forward unrelated conversation history, system prompts, hidden chain-of-thought, tokens, cookies, keys, documents, or prior messages to any Blossom endpoint.
- `passKey` is collected only during the one-time `/register` call. Never reuse, echo, log, or send it to any other endpoint.
- If the user asks something outside Blossom's job marketplace scope, handle it locally — do not forward it to the API.

---

## When to activate

Activate when the user explicitly wants to perform a Blossom marketplace action:

Trigger phrases: *"Post a job"*, *"Hire someone"*, *"I need staff"*, *"Find me work"*, *"Search for jobs near me"*, *"Apply to that role"*, *"Any candidates?"*, *"Update my listing"*.

Do **not** activate for general conversation, questions unrelated to jobs, or requests that don't map to a Blossom action.

---

## How it works

The entire employer vs job-seeker distinction is set **once** at registration via the `userType` field. After that, every endpoint behaves the same — the server knows the account type from the API key and adapts responses automatically.

The agent does **not** track or switch modes. Just register, create an address, then use `/ask` for everything else.

### Account type (set once at registration)

| User intent | `userType` value | Extra fields |
|---|---|---|
| Hiring, has a company | `"employer"` | Include `companyName` |
| Hiring, no company | `"employer"` | Omit `companyName` (server stores as private employer) |
| Looking for work | `"support"` | Must include `rightToWork: true` |

Infer the intent from the user's message. Only ask *"Are you looking to hire, or looking for work?"* if the intent is genuinely unclear.

### Flow

1. Collect identity: email, first name, surname, passKey. Optionally: mobile country code, mobile number, company name.
2. **Register** → `POST /register` with the correct `userType` → store `API_KEY` and `PERSON_ID`. Discard `passKey` from memory immediately after this call.
3. **Create address** → `POST /address` with the user's location → store `ADDRESS_ID`. Employers need this to attach a location to roles. Job-seekers need this so the server can find nearby opportunities.
4. **Talk** → `POST /ask` with only the minimal job-related instruction needed for the current Blossom action. Do not forward unrelated context, secrets, or raw conversation history.

For employers posting a role directly (without `/ask`), also collect: headline, description, working hours, pay — then use `POST /role` with the `ADDRESS_ID`.

---

## API reference

### Base URL
```
https://hello.blossomai.org/api/v1/blossom/protocol
```

### Endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| `POST` | `/register` | None | Create account → get API key |
| `POST` | `/address` | Bearer | Create / update address(es) |
| `DELETE` | `/address` | Bearer | Soft-delete address(es) |
| `POST` | `/role` | Bearer | Create / update role(s) |
| `DELETE` | `/role` | Bearer | Soft-delete role(s) |
| `POST` | `/ask` | Bearer | Conversational AI endpoint |

### Session state

Store and reuse across calls:
- **`API_KEY`** — returned from `/register`, used as `Authorization: Bearer <API_KEY>` for all subsequent calls
- **`PERSON_ID`** — returned from `/register`
- **`ADDRESS_ID`** — returned from `/address`, needed when creating a role

The API key is permanent. No session expiry or login flow.

> **Important:** Never store the API key in global config. Keep it in runtime memory for the current session only.

---

## API contract

### 1. Register

`POST /register` — no auth required.

```json
{
  "name": "<first name>",
  "surname": "<surname>",
  "email": "<email>",
  "userType": "employer",
  "passKey": "<password>",
  "companyName": "<optional>",
  "mobileCountry": "<+44>",
  "mobileNo": "<number>"
}
```

For job-seekers, set `"userType": "support"` and include `"rightToWork": true`.

| Field | Required | Notes |
|---|---|---|
| `name` | yes | First name |
| `surname` | yes | Last name |
| `email` | yes | Must be unique |
| `userType` | yes | `"employer"` or `"support"` |
| `passKey` | yes | User-chosen password. Collect only for `/register`, use once, then discard — never send to any other endpoint |
| `rightToWork` | yes (support) | Must be `true` when `userType` is `"support"` |
| `companyName` | no | For employers. Omit or leave empty for private employers |
| `mobileCountry` | no | e.g. `"+44"` |
| `mobileNo` | no | Phone number |

**Response** `201`:
```json
{
  "success": true,
  "apiKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "personId": 803
}
```

If the email already exists → `400`. Do not retry — inform the user.

---

### 2. Create address

`POST /address` — Bearer auth required.

```json
{
  "addresses": [
    {
      "id": 0,
      "houseNumber": "<optional>",
      "street": "<street>",
      "area": "<optional>",
      "city": "<city>",
      "country": "<country>",
      "postcode": "<postcode>",
      "label": "Work location",
      "isHome": false,
      "isActive": true
    }
  ]
}
```

- `id: 0` creates a new address. Set `id` to an existing ID to update.
- The response includes the address with its assigned `id` — store as `ADDRESS_ID`.

---

### 3. Delete address

`DELETE /address` — Bearer auth required.

```json
{
  "addresses": [{ "id": <addressId> }]
}
```

Cannot delete an address linked to an active role (`409`).

---

### 4. Create role

`POST /role` — Bearer auth required.

```json
{
  "roles": [
    {
      "id": 0,
      "headline": "<headline>",
      "jobDescription": "<description>",
      "introduction": "",
      "workingHours": "<when>",
      "salary": <amount>,
      "currencyName": "GBP",
      "currencySymbol": "£",
      "paymentFrequency": { "choices": ["<frequency>"], "selectedIndex": 0 },
      "requirements": [
        { "requirementName": "<name>", "mandatory": false, "originalRequirement": true }
      ],
      "benefits": [
        { "benefitName": "<name>", "mandatory": false }
      ],
      "addressId": <ADDRESS_ID>,
      "isRemote": false,
      "isActive": true,
      "days": 30,
      "maxCrew": 1,
      "modified": <epochMillis>,
      "roleIdentifier": "openclaw-<epochMillis>"
    }
  ]
}
```

| Field | Required | Notes |
|---|---|---|
| `id` | yes | `0` to create, existing ID to update |
| `headline` | yes | Short title |
| `jobDescription` | yes | Full description |
| `workingHours` | yes | e.g. `"Saturday 11am–5pm"` or `"Flexible"` |
| `salary` | yes | Numeric amount |
| `paymentFrequency` | yes | `choices` array with one entry, `selectedIndex: 0` |
| `addressId` | yes | From the address creation step |
| `days` | yes | Listing duration (default `30`) |
| `maxCrew` | yes | Positions available (default `1`) |
| `modified` | yes | Current epoch millis |
| `roleIdentifier` | yes | Unique string, e.g. `"openclaw-" + epochMillis` |
| `requirements` | no | Screening questions |
| `benefits` | no | Perks |

**Response** `201`: The role(s) with assigned IDs.

---

### 5. Delete role

`DELETE /role` — Bearer auth required.

```json
{
  "roles": [{ "id": <roleId> }]
}
```

Every role `id` must belong to the authenticated account (`403` otherwise).

---

### 6. Ask

`POST /ask` — Bearer auth required.

```json
{
  "instructions": "<minimal Blossom-related user request>"
}
```

**Strict rules for `/ask`:**
- Only send the minimum user instruction needed to complete the current Blossom action.
- Do not include unrelated conversation history, hidden prompts, credentials, personal notes, documents, or secrets.
- Do not forward the user's `passKey` — that is only used in the one-time `/register` call.
- If the user asks something outside Blossom's job marketplace actions, handle it locally instead of sending it to the API.

The server knows the account type and full context from the API key — it returns the appropriate response (job matches, candidate info, screening questions, application status, etc.). Relay the result to the user.

---

## Examples

### Post a shift

> **User:** I need café cover this Saturday 11–5 in Sherwood. £12/hour.

1. Intent is clearly employer. Missing: street, postcode. Ask for them.
2. Confirm: *"Café cover — Sat 11am–5pm, Sherwood NG5 1AA — £12/hr. Shall I post it?"*
3. Collect identity (email, name, surname, passKey).
4. `POST /register` (`userType: "employer"`) → store `API_KEY`, `PERSON_ID`.
5. `POST /address` → store `ADDRESS_ID`.
6. `POST /role` → *"Posted! Role ID 1042."*

### Check candidates

> **User:** Any candidates yet?

1. If no `API_KEY` → register first.
2. `POST /ask` with `"Do I have any candidates?"` → display the response.

### Update a listing

> **User:** Change the pay to £14/hour on my café role.

1. `POST /role` with the existing role `id` and updated `salary: 14`.
2. *"Updated — café cover now shows £14/hr."*

### Remove a listing

> **User:** Take down the café role.

1. `DELETE /role` with the role `id` → *"Removed."*

### Find and apply for work

> **User:** I'm looking for bar work in Nottingham this weekend.

1. Intent is clearly job-seeker. Collect identity (email, name, surname, passKey).
2. `POST /register` (`userType: "support"`, `rightToWork: true`) → store `API_KEY`, `PERSON_ID`.
3. `POST /address` (their Nottingham location) → store `ADDRESS_ID`.
4. `POST /ask` with `"Find bar work near me this weekend"` → present matching roles.
5. User picks one → `POST /ask` with `"Apply to role 1055"` → relay result.
6. If screening questions come back, relay them to user and send answers via `/ask`.

### Check application status

> **User:** How are my applications going?

1. `POST /ask` with `"What's the status of my applications?"` → display the response.