import { Injectable, inject } from '@angular/core';
import { CreateAccountRequest, ValidateExistingUserRequest } from '@api/requests';
import { BaseResponse } from '@api/responses';
import { AccountService } from '@api/services';
import { MapApiError } from '@shared/decorators';
import { Observable } from 'rxjs';
import { AccountExceptions } from '../constants';
import { AccountContract } from '../contracts/account.contract';
import { ExistingUserException } from '../exceptions';

@Injectable()
export class ApiAccountRepository implements AccountContract {
  private _accountService = inject(AccountService);

  public create(data: CreateAccountRequest): Observable<BaseResponse> {
    return this._accountService.create(data);
  }

  @MapApiError({
    [AccountExceptions.EXISTING_USER]: ExistingUserException,
  })
  public validateExistingUser(data: ValidateExistingUserRequest): Observable<BaseResponse> {
    return this._accountService.validateExistingUser(data);
  }
}
