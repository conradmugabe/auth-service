import express from 'express';
import request from 'supertest';

import { AuthRouter } from '../../../../src/server/http/auth';

describe('AuthRouter', () => {
  let app: express.Application;
  let authRouter: AuthRouter;

  beforeEach(() => {
    app = express();
    authRouter = new AuthRouter();
    app.use('', authRouter.getRouter());
  });

  describe('POST /login', () => {
    it('should return 200 with correct message', async () => {
      const response = await request(app).post('/login').send({});

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Login endpoint' });
    });
  });

  describe('POST /register', () => {
    it('should return 201 with correct message', async () => {
      const response = await request(app).post('/register').send({});

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ message: 'Register endpoint' });
    });
  });

  describe('POST /logout', () => {
    it('should return 200 with correct message', async () => {
      const response = await request(app).post('/logout').send({});

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Logout endpoint' });
    });
  });

  describe('GET /me', () => {
    it('should return 200 with correct message', async () => {
      const response = await request(app).get('/me');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Current user endpoint' });
    });
  });
});
