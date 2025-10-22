const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const getListResource = (bodyReq) => api.post('/api/users')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyReq);