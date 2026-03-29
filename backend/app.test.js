import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import request from 'supertest';

import { app } from './app.js';

describe('GET /meals', () => {
  it('returns a non-empty meals array', async () => {
    const res = await request(app).get('/meals');
    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.body));
    assert.ok(res.body.length > 0);
  });
});

describe('POST /orders', () => {
  it('returns 400 when order is missing', async () => {
    const res = await request(app).post('/orders').send({});
    assert.equal(res.status, 400);
  });
});

describe('POST /contact', () => {
  it('returns 400 when fields are missing', async () => {
    const res = await request(app).post('/contact').send({});
    assert.equal(res.status, 400);
  });
});
