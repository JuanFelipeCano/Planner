import { Injectable, inject } from '@angular/core';
import { HttpService } from '@api/http-service/http.service';
import { SignInRequest } from '@api/requests';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _httpService = inject(HttpService);

  public signIn<T = unknown>(data: SignInRequest) {
    return this._httpService.post<T>(environment.apiAuth, 'sign-in', data);
  }
}
