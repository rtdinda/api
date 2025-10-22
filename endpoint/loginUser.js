const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const loginUser = (bodyReq) => api.post('/api/login')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyReq);