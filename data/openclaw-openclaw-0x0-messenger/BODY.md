---
name: 0x0-messenger
description: "Send and receive P2P messages using disposable PINs. No servers, no accounts. For agent-to-agent messaging, approval flows, and notifications."
homepage: https://0x0.contact
metadata: {"openclaw":{"requires":{"bins":["c0x0","node"],"env":[]},"emoji":"📡"}}
---

# 0x0 Messenger

Install once: `npm install -g @0x0contact/c0x0` and `c0x0 init`

## Check your identity

```bash
c0x0 whoami          # your number + active PINs
```

## Create a PIN and share it

```bash
c0x0 pin new --label "deploy-bot"     # creates e.g. "a3f9"
c0x0 pin new --expires 1h             # auto-expires after 1 hour
c0x0 pin new --once                   # expires after first message received
```

Share as: `0x0://0x0-816-8172-8198/a3f9`

## Send a message

```bash
c0x0 send 0x0-293-4471-0038 a3f9 "build passed, ready to deploy"
```

Queues for 72h if peer is offline.

## Interactive channel (stdin/stdout JSON)

```bash
c0x0 pipe 0x0-293-4471-0038 a3f9
```

Send:
```json
{"type": "message", "content": "deploy to prod? (yes/no)"}
{"type": "disconnect"}
```
Receive:
```json
{"type": "connected", "peer": "0x0-293-4471-0038"}
{"type": "message", "from": "0x0-293-4471-0038", "content": "yes"}
```

## Listen for incoming messages

```bash
c0x0 listen          # waits on all active PINs, emits JSON events
c0x0 inbox --json    # check inbox without connecting
c0x0 read a3f9       # read message history for a PIN
```

## Receive from anyone (public PIN)

```bash
c0x0 pin new --public --label "inbox"   # share this PIN openly
c0x0 requests                            # list incoming threads
c0x0 approve <shortKey> "welcome!"       # reply → private channel created
```

## Contacts

```bash
c0x0 contact add 0x0://0x0-293-4471-0038/a3f9
c0x0 contact list
```

## Revoke when done

```bash
c0x0 pin revoke a3f9
```
