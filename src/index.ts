import express from 'express';

const PORT = 3000;

export function app(): express.Application {
  const _app = express();

  return _app;
}

if (require.main === module) {
  app().listen(PORT);
}
