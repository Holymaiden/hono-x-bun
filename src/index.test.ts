import { describe, expect, it } from 'bun:test';
import app from '.';

describe('My first test', () => {
  it('Should return 200 Response', async () => {
    const req = new Request('http://localhost/');
    const res = await app.fetch(req);
    expect(await res.text()).toBe('Hello Hono!');
  });

  it('Should return 404 Response', async () => {
    const req = new Request('http://localhost/404');
    const res = await app.fetch(req);
    expect(await res.json()).toEqual({ message: 'Not Found', ok: false });
  });
});
