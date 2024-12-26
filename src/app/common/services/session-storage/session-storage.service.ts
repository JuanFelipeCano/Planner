/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { SessionStorageProvider } from '@common/providers';

@Injectable()
export class SessionStorageService implements SessionStorageProvider {
  public async set(key: string, data: unknown): Promise<void> {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public async get<T = any>(key: string): Promise<T> {
    const item = sessionStorage.getItem(key);

    try {
      return JSON.parse(item!) as T;
    } catch (error) {
      return item as T;
    }
  }

  public async delete(key: string): Promise<void> {
    sessionStorage.removeItem(key);
  }
}
