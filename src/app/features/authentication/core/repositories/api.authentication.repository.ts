import { Injectable, inject } from '@angular/core';
import { SignInRequest } from '@api/requests';
import { SignInResponse } from '@api/responses';
import { BaseResponse } from '@api/responses/base.response';
import { AuthenticationService } from '@api/services';
import { Observable } from 'rxjs';
import { AuthenticationContract } from '../contracts';

@Injectable()
export class ApiAuthenticationRepository implements AuthenticationContract {
  private _authenticationService = inject(AuthenticationService);

  public signIn(data: SignInRequest): Observable<BaseResponse<SignInResponse>> {
    return this._authenticationService.signIn<SignInResponse>(data);
  }
}
