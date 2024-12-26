/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class SessionStorageProvider {
  public abstract set(key: string, data: any): Promise<void>;

  public abstract get<T = any>(key: string): Promise<T>;

  public abstract delete(key: string): Promise<void>;

  // clear, getAll: Promise<Record<string, unknow>>
}
