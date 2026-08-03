# Security & Compliance Guide

## Authentication & Authorization
- JWT Access Token (15-minute expiration) with HTTP-only Bearer authorization headers.
- Refresh Tokens (7-day expiration) for secure token rotation.
- Password hashing using `bcryptjs` with 12 salt rounds.

## System Defense Controls
- **Helmet.js**: Sets security HTTP headers.
- **CORS**: Configurable domain origin policies.
- **Rate Limiting**: 100 requests per minute per IP.
- **NoSQL Injection & Sanitization**: Strict schema validation.
- **Auditing**: Audit logging on all administrative actions.
