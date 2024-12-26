export class CoreExceptionBase<T = unknown> {
  constructor(
    public readonly message?: string,
    public readonly code?: string | number,
    public readonly data?: T
  ) {
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
