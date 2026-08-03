# API Specification Guide (/api/v1/)

## Standard Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  },
  "timestamp": "2026-08-04T00:00:00.000Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Resource not found",
  "code": "NOT_FOUND",
  "details": {},
  "timestamp": "2026-08-04T00:00:00.000Z"
}
```

## Key API Endpoints
- `POST /api/v1/auth/login`: Admin authentication.
- `GET /api/v1/content/:module`: Generic CMS retrieval for 25+ modules (e.g. `projects`, `blogs`, `skills`, `certificates`).
- `POST /api/v1/content/:module`: Admin content creation.
- `GET /api/v1/search?q=query`: Universal global search across blogs, projects, research, and patents.
- `POST /api/v1/ai/chat`: AI portfolio RAG chatbot.
- `GET /api/v1/analytics/dashboard`: System & visitor analytics dashboard overview.
