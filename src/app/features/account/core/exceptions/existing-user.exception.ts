import { CoreExceptionBase } from '@common/bases';

export class ExistingUserException extends CoreExceptionBase {
  public readonly name = 'ExistingUserException';
}
