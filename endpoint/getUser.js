
import supertest from 'supertest';

import dotenv from 'dotenv';

dotenv.config();

const api = supertest(process.env.BASE_URL);

// export const getListUsers = (page) => api.get(`/api/users?page=${page}`)
export const getListUsers = (page) => api.get(`/api/users?page=${page}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

// export const getUser = (id) => api.get(`/api/users/${id}`)
export const getUser = (id) => api.get(`/api/users/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');