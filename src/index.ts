import { env } from 'bun';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { RegExpRouter } from 'hono/router/reg-exp-router';
import { Response } from './types';

import { AuthRoute, UserRoute } from './routes';

const app = new Hono({ router: new RegExpRouter() });

app.get('/', (c) => c.text('Hello Hono!'));
app.use(cors(), prettyJSON(), logger());
app.route('/auth', AuthRoute);
app.route('/user', UserRoute);

// Error handler
app.onError((err, c) => {
  const response: Response = {
    ok: false,
    status: 500,
    message: err.message,
  };

  return c.json(response, 500);
});
app.notFound((c) => {
  const response: Response = {
    ok: false,
    status: 404,
    message: 'Not Found',
  };

  return c.json(response, 404);
});

export default {
  port: +(env.PORT ?? 3000),
  fetch: app.fetch,
};
