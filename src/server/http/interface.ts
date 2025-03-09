import express from 'express';

export interface Router {
  getRouter: express.Router;
}
