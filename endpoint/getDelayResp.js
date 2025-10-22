const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const getDelayResp = (sec) => api.get(`/api/users?delay=${sec}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');