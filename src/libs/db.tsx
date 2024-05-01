import { createClient } from '@supabase/supabase-js';
import { env } from 'bun';

const supabase = createClient(
  String(env.SUPERBASE_URL),
  String(env.SUPERBASE_KEY)
);

export default supabase;
