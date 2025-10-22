const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.BASE_URL);

export const getListResource = () => api.get('/api/unknown')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

export const getUser = (id) => api.get(`/api/unknown/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');