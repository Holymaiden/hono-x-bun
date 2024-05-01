export type Response<T = unknown> = {
  ok: boolean;
  status: number;
  message: string;
  data?: T;
};
