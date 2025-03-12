import express from "express";

import { combineRouters } from "./server/http/utils";
import { AuthRouter } from "./server/http/auth/index";

const PORT = 3000;

export function app(): express.Application {
  const _app = express();

  combineRouters([new AuthRouter()]);

  return _app;
}

if (require.main === module) {
  app().listen(PORT);
}
