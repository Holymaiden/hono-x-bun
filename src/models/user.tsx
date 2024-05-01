import db from '../libs/db';

export const getUser = async () => {
  const user = await db.query('SELECT * FROM users');
};
