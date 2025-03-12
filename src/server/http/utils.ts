import express from "express";

import { Router } from "./interface";

export function combineRouters(routers: Router[]): express.Router {
  const router = express.Router();

  for (const _router of routers) {
    router.use(_router.getRouter());
  }

  return router;
}
