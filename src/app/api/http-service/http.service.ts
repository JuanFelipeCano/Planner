import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BaseResponse } from '@api/responses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _http = inject(HttpClient);

  public post<Response = unknown, Request = unknown>
  (api: string, endpoint: string, data: Request)
  : Observable<BaseResponse<Response>> {
    const url = `${api}/${endpoint}`;

    return this._http.post<BaseResponse<Response>>(url, data);
  }
}
