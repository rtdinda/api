const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const updateUserPut = (id, bodyReq) => api.put(`/api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyReq);

export const updateUserPatch = (id) => api.patch(`/api/unknown/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyReq);