const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const deleteUser = (id) => api.delete(`/api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');