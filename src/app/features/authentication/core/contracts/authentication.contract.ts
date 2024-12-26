import { SignInRequest } from '@api/requests';
import { SignInResponse } from '@api/responses';
import { BaseResponse } from '@api/responses/base.response';
import { Observable } from 'rxjs';

export abstract class AuthenticationContract {
  abstract signIn(data: SignInRequest): Observable<BaseResponse<SignInResponse>>;
}
