import { Injectable } from '@angular/core';
import { CreateAccountRequest, ValidateExistingUserRequest } from '@api/requests';
import { Observable, delay, of, throwError } from 'rxjs';
import { AccountContract } from '../contracts/account.contract';
import { ExistingUserException } from '../exceptions';
import { BaseResponse } from '@api/responses';

const DELAY = 2000;

@Injectable()
export class FakeAccountRepository implements AccountContract {

  public create(data: CreateAccountRequest): Observable<BaseResponse> {
    if (data.email === 'juan@gmail.com') {
      return of({ status: true });
    }

    return throwError(() => ({ status: false })).pipe(delay(DELAY));
  }

  public validateExistingUser(data: ValidateExistingUserRequest): Observable<BaseResponse> {
    if (data.email === 'andres@gmail.com') {
      return throwError(() => new ExistingUserException()).pipe(delay(DELAY));
    }

    if (data.email === 'juan@gmail.com') {
      return throwError(() => ({ status: false })).pipe(delay(DELAY));
    }

    return of({ status: true }).pipe(delay(DELAY));
  }
}
