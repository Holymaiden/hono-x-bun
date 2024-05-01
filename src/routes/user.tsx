import { Hono } from 'hono';
import { RegExpRouter } from 'hono/router/reg-exp-router';

const app = new Hono({ router: new RegExpRouter() });

app.get('/', (c) => c.text('Get Users'));

export default app;
