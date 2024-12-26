import { CreateAccountRequest, ValidateExistingUserRequest } from '@api/requests';
import { BaseResponse } from '@api/responses';
import { Observable } from 'rxjs';

export abstract class AccountContract {
  abstract create(data: CreateAccountRequest): Observable<BaseResponse>;

  abstract validateExistingUser(data: ValidateExistingUserRequest): Observable<BaseResponse>;
}
