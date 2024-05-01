import supabase from '@/libs/db';
import { SignUpEmailType } from '@/types';

export const signUpEmail = async ({ email, password }: SignUpEmailType) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  return { data, error };
};

export const signInWithPassword = async ({
  email,
  password,
}: SignUpEmailType) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};
