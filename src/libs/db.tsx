import { createPool } from '@vercel/postgres';
import { env } from 'bun';
const pool = createPool({
  connectionString: env.POSTGRES_URL,
});

export default pool;
