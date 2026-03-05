# Vickel Assignment Log Book App

REST API built with Next.js + TypeScript.

## Schema

| Field | Description |
|-------|-------------|
| `id` | Auto-generated unique ID |
| `title` | Assignment title |
| `description` | Assignment description |
| `assignmentDate` | Auto-generated from system when created |
| `dueDate` | Due date (set by user) |
| `status` | `Created` / `On Process` / `Submitted` |

## API Design Table

| Method | Endpoint | Description | Request Body | Success | Error |
|--------|----------|-------------|--------------|---------|-------|
| GET | `/api/assignments` | Get all assignments | None | 200 | 500 |
| POST | `/api/assignments` | Create new assignment | `{ title, dueDate, description?, status? }` | 201 | 400 |
| GET | `/api/assignments/:id` | Get assignment by ID | None | 200 | 404 |
| PUT | `/api/assignments/:id` | Update assignment | `{ title?, description?, dueDate?, status? }` | 200 | 404 / 400 |
| DELETE | `/api/assignments/:id` | Delete assignment | None | 200 | 404 |

## Getting Started

```bash
npx create-next-app@latest vickel-assignment-logbook --typescript
cd vickel-assignment-logbook
npm install swagger-ui-react swagger-jsdoc next-swagger-doc
npm run dev
```

## Swagger Docs
Visit: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)