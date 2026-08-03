const request = require('supertest');
const app = require('../../src/app');

describe('GET /health API Endpoint', () => {
  it('should return 200 OK with UP status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
    expect(res.body).toHaveProperty('appName');
  });

  it('should return 200 OK for settings health check', async () => {
    const res = await request(app).get('/api/v1/settings/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('success', true);
  });
});
