import { Injectable } from '@angular/core';
import { SignInRequest } from '@api/requests';
import { SignInResponse } from '@api/responses';
import { BaseResponse } from '@api/responses/base.response';
import { Observable, delay, of, throwError } from 'rxjs';
import { AuthenticationContract } from '../contracts';

const DELAY = 2000;

@Injectable()
export class FakeAuthenticationRepository implements AuthenticationContract {

  public signIn(data: SignInRequest): Observable<BaseResponse<SignInResponse>> {
    if (data.login === 'juan@gmail.com') {
      return of({
        status: true,
        data: {
          token: 'asdfg',
        },
      }).pipe(delay(3000));
    } else {
      return throwError(() => ({ status: false })).pipe(delay(DELAY));
    }
  }
}
