import { createSwaggerSpec } from 'next-swagger-doc';

export function getApiDocs() {
  return createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Vickel Assignment Log Book API',
        version: '1.0.0',
        description: 'REST API for managing assignments',
      },
      paths: {
        '/api/assignments': {
          get: {
            tags: ['Assignments'],
            summary: 'Get all assignments',
            responses: {
              200: { description: 'List of all assignments' },
              500: { description: 'Server error' },
            },
          },
          post: {
            tags: ['Assignments'],
            summary: 'Create a new assignment',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['title', 'dueDate'],
                    properties: {
                      title: { type: 'string', example: 'Math Homework' },
                      description: { type: 'string', example: 'Complete exercises 1-10' },
                      dueDate: { type: 'string', example: '2026-03-20' },
                      status: { type: 'string', enum: ['Created', 'On Process', 'Submitted'], example: 'Created' },
                    },
                  },
                },
              },
            },
            responses: {
              201: { description: 'Assignment created' },
              400: { description: 'Missing required fields' },
            },
          },
        },
        '/api/assignments/{id}': {
          get: {
            tags: ['Assignments'],
            summary: 'Get assignment by ID',
            parameters: [
              { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
            ],
            responses: {
              200: { description: 'Assignment found' },
              404: { description: 'Assignment not found' },
            },
          },
          put: {
            tags: ['Assignments'],
            summary: 'Update an assignment',
            parameters: [
              { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      title: { type: 'string', example: 'Updated Title' },
                      description: { type: 'string', example: 'Updated description' },
                      dueDate: { type: 'string', example: '2026-04-01' },
                      status: { type: 'string', enum: ['Created', 'On Process', 'Submitted'], example: 'On Process' },
                    },
                  },
                },
              },
            },
            responses: {
              200: { description: 'Assignment updated' },
              404: { description: 'Assignment not found' },
              400: { description: 'Invalid request body' },
            },
          },
          delete: {
            tags: ['Assignments'],
            summary: 'Delete an assignment',
            parameters: [
              { in: 'path', name: 'id', required: true, schema: { type: 'string' } },
            ],
            responses: {
              200: { description: 'Assignment deleted' },
              404: { description: 'Assignment not found' },
            },
          },
        },
      },
    },
  });
}