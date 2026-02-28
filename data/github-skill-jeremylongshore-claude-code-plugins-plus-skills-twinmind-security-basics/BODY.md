---
name: twinmind-security-basics
description: |
  Implement security best practices for TwinMind integrations.
  Use when securing API keys, configuring privacy settings,
  or implementing data protection for meeting recordings.
  Trigger with phrases like "twinmind security", "secure twinmind",
  "twinmind privacy", "protect twinmind data", "twinmind api key security".
allowed-tools: Read, Write, Edit
version: 1.0.0
license: MIT
author: Jeremy Longshore <jeremy@intentsolutions.io>
---

# TwinMind Security Basics

## Overview
Essential security practices for TwinMind integrations, focusing on API security, data privacy, and compliance.

## Prerequisites
- TwinMind account configured
- Understanding of environment variables
- Basic security concepts

## Instructions

### Step 1: Secure API Key Management

```typescript
// NEVER do this - hardcoded secrets
const TWINMIND_API_KEY = "tm_sk_abc123"; // BAD!

// DO this - use environment variables
const apiKey = process.env.TWINMIND_API_KEY;
if (!apiKey) {
  throw new Error('TWINMIND_API_KEY environment variable required');
}

// Even better - use a secrets manager
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

async function getApiKey(): Promise<string> {
  const client = new SecretManagerServiceClient();
  const [version] = await client.accessSecretVersion({
    name: 'projects/my-project/secrets/twinmind-api-key/versions/latest',
  });
  return version.payload?.data?.toString() || '';
}
```

### Step 2: Environment Configuration

```bash
# .env file (gitignored)
TWINMIND_API_KEY=tm_sk_your_secret_key
TWINMIND_WEBHOOK_SECRET=whsec_your_webhook_secret
TWINMIND_ENCRYPTION_KEY=your_32_byte_encryption_key

# .env.example (committed to repo - no real values)
TWINMIND_API_KEY=tm_sk_xxx
TWINMIND_WEBHOOK_SECRET=whsec_xxx
TWINMIND_ENCRYPTION_KEY=xxx
```

```gitignore
# .gitignore
.env
.env.local
.env.*.local
*.pem
*.key
secrets/
```

### Step 3: Validate Webhook Signatures

```typescript
// src/twinmind/webhooks/verify.ts
import crypto from 'crypto';

export function verifyWebhookSignature(
  payload: string | Buffer,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  const providedSignature = signature.replace('sha256=', '');

  // Use timing-safe comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature),
    Buffer.from(providedSignature)
  );
}

// Express middleware
export function webhookMiddleware(req: Request, res: Response, next: NextFunction) {
  const signature = req.headers['x-twinmind-signature'] as string;
  const secret = process.env.TWINMIND_WEBHOOK_SECRET!;

  if (!signature) {
    return res.status(401).json({ error: 'Missing signature' });
  }

  const rawBody = (req as any).rawBody || JSON.stringify(req.body);

  if (!verifyWebhookSignature(rawBody, signature, secret)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  next();
}
```

### Step 4: Encrypt Sensitive Data at Rest

```typescript
// src/twinmind/encryption.ts
import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const TAG_LENGTH = 16;

export function encrypt(text: string, key: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    Buffer.from(key, 'hex'),
    iv
  );

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const tag = cipher.getAuthTag();

  // Return iv:tag:encrypted
  return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedData: string, key: string): string {
  const [ivHex, tagHex, encrypted] = encryptedData.split(':');

  const iv = Buffer.from(ivHex, 'hex');
  const tag = Buffer.from(tagHex, 'hex');
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    Buffer.from(key, 'hex'),
    iv
  );

  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Usage for storing transcripts
export function storeTranscript(transcript: string): string {
  const key = process.env.TWINMIND_ENCRYPTION_KEY!;
  return encrypt(transcript, key);
}

export function retrieveTranscript(encryptedTranscript: string): string {
  const key = process.env.TWINMIND_ENCRYPTION_KEY!;
  return decrypt(encryptedTranscript, key);
}
```

### Step 5: Implement Access Control

```typescript
// src/twinmind/auth/permissions.ts
export enum Permission {
  READ_TRANSCRIPTS = 'transcripts:read',
  WRITE_TRANSCRIPTS = 'transcripts:write',
  DELETE_TRANSCRIPTS = 'transcripts:delete',
  MANAGE_SETTINGS = 'settings:manage',
  VIEW_ANALYTICS = 'analytics:view',
  ADMIN = 'admin:*',
}

export interface User {
  id: string;
  email: string;
  permissions: Permission[];
  organizationId: string;
}

export function hasPermission(user: User, permission: Permission): boolean {
  if (user.permissions.includes(Permission.ADMIN)) {
    return true;
  }
  return user.permissions.includes(permission);
}

export function requirePermission(permission: Permission) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!hasPermission(user, permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}

// Usage in routes
app.get(
  '/api/transcripts',
  requirePermission(Permission.READ_TRANSCRIPTS),
  getTranscripts
);

app.delete(
  '/api/transcripts/:id',
  requirePermission(Permission.DELETE_TRANSCRIPTS),
  deleteTranscript
);
```

### Step 6: Configure Privacy Settings

```typescript
// src/twinmind/privacy.ts
export interface PrivacyConfig {
  // Audio handling
  storeAudio: boolean;
  audioRetentionDays: number;

  // Transcript handling
  storeTranscripts: boolean;
  transcriptRetentionDays: number;
  encryptTranscripts: boolean;

  // Processing
  processLocally: boolean; // Use on-device processing when possible

  // Sharing
  allowSharing: boolean;
  requireConsent: boolean;

  // PII handling
  redactPII: boolean;
  piiPatterns: string[];
}

const defaultPrivacyConfig: PrivacyConfig = {
  storeAudio: false, // TwinMind default - never store audio
  audioRetentionDays: 0,
  storeTranscripts: true,
  transcriptRetentionDays: 90,
  encryptTranscripts: true,
  processLocally: true,
  allowSharing: false,
  requireConsent: true,
  redactPII: true,
  piiPatterns: [
    '\\b\\d{3}-\\d{2}-\\d{4}\\b', // SSN
    '\\b\\d{16}\\b', // Credit card
    '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b', // Email
  ],
};

export function redactPII(text: string, patterns: string[]): string {
  let redacted = text;

  for (const pattern of patterns) {
    const regex = new RegExp(pattern, 'gi');
    redacted = redacted.replace(regex, '[REDACTED]');
  }

  return redacted;
}
```

### Step 7: Audit Logging

```typescript
// src/twinmind/audit.ts
export interface AuditEvent {
  timestamp: Date;
  userId: string;
  action: string;
  resource: string;
  resourceId?: string;
  details?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

export class AuditLogger {
  private events: AuditEvent[] = [];

  log(event: Omit<AuditEvent, 'timestamp'>): void {
    const fullEvent: AuditEvent = {
      ...event,
      timestamp: new Date(),
    };

    this.events.push(fullEvent);
    this.persist(fullEvent);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[AUDIT]', JSON.stringify(fullEvent));
    }
  }

  private async persist(event: AuditEvent): Promise<void> {
    // Send to logging service (e.g., CloudWatch, Datadog)
    // await logService.write(event);
  }

  async query(filters: Partial<AuditEvent>): Promise<AuditEvent[]> {
    return this.events.filter(event => {
      return Object.entries(filters).every(([key, value]) =>
        event[key as keyof AuditEvent] === value
      );
    });
  }
}

export const auditLogger = new AuditLogger();

// Usage
auditLogger.log({
  userId: 'user_123',
  action: 'TRANSCRIPT_ACCESSED',
  resource: 'transcript',
  resourceId: 'tr_abc123',
  details: { method: 'GET', endpoint: '/api/transcripts/tr_abc123' },
});
```

## Output
- Secure API key storage
- Webhook signature verification
- Data encryption at rest
- Access control implementation
- Privacy configuration
- Audit logging

## Security Checklist

```markdown
## Pre-Deployment Security Checklist

### API Security
- [ ] API keys stored in environment variables or secrets manager
- [ ] No hardcoded credentials in source code
- [ ] API key rotation process documented
- [ ] Rate limiting implemented

### Data Protection
- [ ] Transcripts encrypted at rest
- [ ] PII redaction enabled
- [ ] Data retention policies configured
- [ ] Backup encryption verified

### Authentication
- [ ] Webhook signatures verified
- [ ] JWT tokens validated properly
- [ ] Session timeout configured
- [ ] MFA enabled for admin accounts

### Access Control
- [ ] RBAC implemented
- [ ] Least privilege principle applied
- [ ] Regular permission audits scheduled

### Monitoring
- [ ] Audit logging enabled
- [ ] Failed auth attempts monitored
- [ ] Anomaly detection configured
- [ ] Incident response plan documented
```

## Error Handling

| Scenario | Risk | Mitigation |
|----------|------|------------|
| API key exposed | Full account access | Rotate key immediately, audit logs |
| Webhook unverified | Spoofed events | Always verify signatures |
| PII leaked | Compliance violation | Enable redaction, encrypt data |
| Unauthorized access | Data breach | Implement RBAC, audit logging |

## TwinMind Privacy Features

TwinMind provides built-in privacy protection:
- **No audio storage**: Audio is processed in real-time and immediately deleted
- **On-device processing**: Transcription can run locally on device
- **Encrypted backups**: Optional cloud backups are encrypted
- **Data residency**: Choose data storage region (Enterprise)
- **GDPR compliance**: Data export and deletion support

## Resources
- [TwinMind Security Whitepaper](https://twinmind.com/security)
- [TwinMind Privacy Policy](https://twinmind.com/privacy)
- [OWASP Security Guidelines](https://owasp.org/www-project-web-security-testing-guide/)

## Next Steps
For production deployment, see `twinmind-prod-checklist`.
