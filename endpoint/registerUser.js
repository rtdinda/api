const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const registUser = (bodyReq) => api.post('/api/register')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyReq);