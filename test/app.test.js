const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('App Tests', () => {
  it('should return 200 for homepage', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.include('Hello from DevOps Pipeline Demo');
  });
});
