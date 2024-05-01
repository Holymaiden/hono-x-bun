import { signInWithPassword, signUpEmail } from '@/models';
import { Response, signUpEmailScheme } from '@/types';
import { Hono } from 'hono';
import { RegExpRouter } from 'hono/router/reg-exp-router';
import { zValidator } from '@hono/zod-validator';

const app = new Hono({ router: new RegExpRouter() });

app.post('/signup/email', zValidator('form', signUpEmailScheme), async (c) => {
  const { email, password } = c.req.valid('form');

  const { data, error } = await signUpEmail({ email, password });

  if (error) throw new Error(error.message);

  if (data.user?.identities && data.user?.identities?.length > 0)
    return c.json<Response>({
      ok: false,
      status: 400,
      message: 'User already exists',
    });

  return c.json<Response<typeof data>>({
    ok: true,
    status: 200,
    message: 'User created successfully',
    data,
  });
});

app.post('/signin/email', zValidator('form', signUpEmailScheme), async (c) => {
  const { email, password } = c.req.valid('form');

  const { data, error } = await signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return c.json<Response<(typeof data)['session']>>({
    ok: true,
    status: 200,
    message: 'User signed in successfully',
    data: data?.session,
  });
});

export default app;
