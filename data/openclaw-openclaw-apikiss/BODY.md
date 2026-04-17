---
name: apikiss
description: Access weather, IP geolocation, SMS, email, crypto prices, QR codes, Danish CVR, Whois, phone lookup, UUID, stock data, passwords, and more via the API KISS unified gateway (apikiss.com).
homepage: https://www.apikiss.com
metadata: {"openclaw": {"emoji": "💋", "requires": {"env": ["APIKISS_API_KEY"]}, "primaryEnv": "APIKISS_API_KEY"}}
---

# API KISS

Use the [API KISS](https://www.apikiss.com) unified gateway to call dozens of services through one consistent API with Bearer token auth.

API KISS queries multiple upstream providers in parallel for read operations (returning the fastest response) and uses smart fallback for write operations (trying alternative providers on failure).

## Setup

Set your API key as an environment variable:

```
APIKISS_API_KEY=your_token_here
```

All requests use:
- Base URL: `https://www.apikiss.com/api/v1/`
- Auth header: `Authorization: Bearer $APIKISS_API_KEY`
- Method: **GET** for all endpoints (parameters are query strings)

## Available Endpoints

| Endpoint | Description | Required Params |
|---|---|---|
| `/weather` | Current weather by coordinates | `latitude`, `longitude` |
| `/ip` | Your IP address | _(none)_ |
| `/sms` | Send SMS worldwide | `phone`, `message` |
| `/flash-sms` | Send flash SMS (appears on screen instantly) | `to`, `message` |
| `/email` | Send email (HTML or plain text) | `to`, `subject`, + `body` or `html` |
| `/crypto` | Real-time cryptocurrency price in USD | `symbol` |
| `/cvr` | Danish Business Registry lookup | `query` |
| `/whois` | Domain registration info | `domain` |
| `/phone-lookup` | Validate phone number, carrier, type, country | `phone` |
| `/uuid` | Generate a UUID v4 (free) | _(none)_ |
| `/stock` | Real-time stock quote | `symbol` |
| `/time` | Current time at coordinates | `latitude`, `longitude` |
| `/password` | Generate a secure password | `length` _(optional)_ |
| `/password/validate` | Check password strength (score 0-4) | `password` (JSON body) |
| `/photo` | Get a random photo URL | _(none)_ |
| `/qr-code` | Generate QR code (binary PNG/SVG) (free) | `data` |
| `/qr-code/generate` | Generate QR code (JSON with base64 image) (free) | `data` |
| `/chuck-norris-facts` | Random Chuck Norris fact (free) | _(none)_ |

## Endpoint Details

### Weather — `GET /weather`
Returns current conditions: temperature (Celsius + Kelvin), humidity, pressure, visibility, and summary.
| Param | Type | Required | Description |
|---|---|---|---|
| `latitude` | number | yes | Latitude of the location |
| `longitude` | number | yes | Longitude of the location |

### IP — `GET /ip`
Returns your current IP address. No parameters needed.

### SMS — `GET /sms`
Sends an SMS message. Returns `{ "success": true }`.
| Param | Type | Required | Description |
|---|---|---|---|
| `phone` | string | yes | Recipient phone number (e.g. `+4512345678`) |
| `message` | string | yes | Message text |

### Flash SMS — `GET /flash-sms`
Sends a flash SMS that appears directly on the recipient's screen. Returns `message_id` and `status`.
| Param | Type | Required | Description |
|---|---|---|---|
| `to` | string | yes | Recipient phone number |
| `message` | string | yes | Message text |

### Email — `GET /email`
Sends an email via providers like Resend. Returns `success`, `provider`, and `message_id`.
| Param | Type | Required | Description |
|---|---|---|---|
| `to` | string | yes | Recipient email address |
| `subject` | string | yes | Email subject line |
| `body` | string | conditional | Plain text body (required if `html` not provided) |
| `html` | string | conditional | HTML body (required if `body` not provided) |
| `from` | string | no | Sender address (defaults to `noreply@apikiss.com`) |

### Crypto — `GET /crypto`
Returns the current price in USD, averaged from multiple exchanges.
| Param | Type | Required | Description |
|---|---|---|---|
| `symbol` | string | yes | Cryptocurrency symbol (e.g. `BTC`, `ETH`) |

### CVR — `GET /cvr`
Danish Business Registry. Returns company name, CVR number, address, phone, email, country.
| Param | Type | Required | Description |
|---|---|---|---|
| `query` | string | yes | Company name or CVR number |

### Whois — `GET /whois`
Domain registration details (registrar, dates, nameservers).
| Param | Type | Required | Description |
|---|---|---|---|
| `domain` | string | yes | Domain name (e.g. `example.com`) |

### Phone Lookup — `GET /phone-lookup`
Validates a phone number. Returns validity, country, carrier, and line type.
| Param | Type | Required | Description |
|---|---|---|---|
| `phone` | string | yes | Phone number to look up |

### UUID — `GET /uuid`
Generates a cryptographically secure UUID v4. No parameters. Free tier.

### Stock — `GET /stock`
Returns the current stock price.
| Param | Type | Required | Description |
|---|---|---|---|
| `symbol` | string | yes | Stock ticker symbol (e.g. `AAPL`) |

### Time — `GET /time`
Returns the current time at the given coordinates as an ISO 8601 timestamp.
| Param | Type | Required | Description |
|---|---|---|---|
| `latitude` | number | yes | Latitude |
| `longitude` | number | yes | Longitude |

### Password — `GET /password`
Generates a secure random password.
| Param | Type | Required | Description |
|---|---|---|---|
| `length` | integer | no | Desired password length |

### Password Validate — `GET /password/validate`
Checks password strength. Returns a score (0–4) and feedback with suggestions.
Send a JSON body: `{ "password": "MySecurePassword123!" }`

### Photo — `GET /photo`
Returns a random photo URL. No parameters.

### QR Code (binary) — `GET /qr-code`
Returns a raw PNG or SVG image file directly.
| Param | Type | Required | Description |
|---|---|---|---|
| `data` | string | yes | Text/URL to encode |
| `size` | integer | no | Size in pixels (32–1024) |
| `output_format` | string | no | `png` or `svg` |
| `error_correction` | string | no | `l`, `m`, `q`, or `h` |
| `foreground` | string | no | Hex color (e.g. `#ff0000`) |
| `background` | string | no | Hex color (e.g. `#ffffff`) |

### QR Code (JSON) — `GET /qr-code/generate`
Returns JSON with base64-encoded image data. Same parameters as above.

### Chuck Norris Facts — `GET /chuck-norris-facts`
Returns a random Chuck Norris fact. No parameters. Free tier.

## Usage Examples

### Weather
```sh
curl "https://www.apikiss.com/api/v1/weather?latitude=55.6761&longitude=12.5683" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### IP
```sh
curl "https://www.apikiss.com/api/v1/ip" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### Send SMS
```sh
curl "https://www.apikiss.com/api/v1/sms?phone=%2B4512345678&message=Hello+from+OpenClaw!" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### Send Email
```sh
curl "https://www.apikiss.com/api/v1/email?to=recipient%40example.com&subject=Hello&body=Hi+there" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### Crypto Price
```sh
curl "https://www.apikiss.com/api/v1/crypto?symbol=BTC" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### Danish CVR Lookup
```sh
curl "https://www.apikiss.com/api/v1/cvr?query=Novo+Nordisk" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### QR Code (save as PNG)
```sh
curl "https://www.apikiss.com/api/v1/qr-code?data=https%3A%2F%2Fexample.com&size=256" \
  -H "Authorization: Bearer $APIKISS_API_KEY" -o qr.png
```

### Generate Password
```sh
curl "https://www.apikiss.com/api/v1/password?length=20" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### Stock Quote
```sh
curl "https://www.apikiss.com/api/v1/stock?symbol=AAPL" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

### UUID
```sh
curl "https://www.apikiss.com/api/v1/uuid" \
  -H "Authorization: Bearer $APIKISS_API_KEY"
```

## External Endpoints

All requests go to: `https://www.apikiss.com/api/v1/*`

Data sent includes only the query parameters you provide (e.g. coordinates, phone number, symbol). Your `APIKISS_API_KEY` is sent as a Bearer token in the Authorization header and never logged locally.

## Security & Privacy

- Your API key stays in your environment — never in prompts or logs.
- Only the data you explicitly pass as parameters leaves your machine.
- API KISS does not store request payloads.

## Trust Statement

By using this skill, queries are sent to `https://www.apikiss.com`. Only install if you trust apikiss.com with the data you pass to it.
