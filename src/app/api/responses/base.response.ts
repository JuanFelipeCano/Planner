export interface BaseResponse<T = unknown> {
  status: boolean;
  exception?: unknown;
  code?: number | string;
  data?: T;
}
