/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, catchError, map, throwError } from 'rxjs';

interface Response {
  status: boolean;
  exception?: { message: string, name: string };
  code?: number | string;
  data?: unknown;
}

type Params = Record<string, any>;

export const MapApiError = (params: Params) => (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    const result: Observable<unknown> = originalMethod.apply(this, args);

    return result.pipe(
      map(response => response),
      catchError((error: Response) => MapError(error, params)),
    );
  };

  return descriptor;
}

const MapError = (error: Response, params: Params) => {
  if (error.exception?.name) {
    const exception = params[error.exception.name];
    return throwError(() => new exception(error.exception?.message));
  }

  return throwError(() => error);
}
