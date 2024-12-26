/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AlertMessageButtonConfig {
  text: string;
  params?: unknown;
  callback?: (params?: any) => Promise<unknown>;
}
