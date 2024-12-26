import { Injectable, inject } from '@angular/core';
import { HttpService } from '@api/http-service/http.service';
import { CreateAccountRequest, ValidateExistingUserRequest } from '@api/requests';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly _httpService = inject(HttpService);
  private readonly apiUrl = environment.apiAccounts;

  public create(data: CreateAccountRequest) {
    return this._httpService.post(this.apiUrl, 'register', data);
  }

  public validateExistingUser(data: ValidateExistingUserRequest) {
    return this._httpService.post(this.apiUrl, 'existing-user', data);
  }
}
