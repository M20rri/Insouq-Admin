import { Injectable } from '@angular/core';
import { UserStorageService } from '../../core/services/user-storage.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Urls } from 'src/environments/urls';
import {
  AuthenticateRequest,
  PrivillageResponse,
  TokenResponse,
  User,
} from '../user-management/models/user.model';
import { BaseResponse } from 'src/app/core/models/base-response.model';
import { ApiHelperService } from 'src/app/core/services/api-helper.service';
import { HttpMethods } from 'src/app/shared/enums/httpMethodsEnum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private userStorageService: UserStorageService,
    private apiHelper: ApiHelperService
  ) {}

  isLoggedIn() {
    return this.userStorageService.getToken() ? true : false; // add your strong logic
  }

  authenticate(model: AuthenticateRequest): Observable<TokenResponse> {
    const endpoint = `${Urls.Controller.Account}${Urls.UserAccount.Login}`;

    return this.apiHelper.request(HttpMethods.POST, endpoint, model).pipe(
      catchError((err: any) => {
        console.error('Error in Subscription:', err.error);
        alert(err.error.message);
        return throwError(err.error); // Rethrow it back to component
      })
    );
  }

  roleAuthenticate(): Observable<Array<PrivillageResponse>> {
    const endpoint = `${Urls.Controller.Account}${Urls.UserAccount.GetUserPrivilages}`;

    return this.apiHelper.request(HttpMethods.GET, endpoint).pipe(
      catchError((err: any) => {
        console.error('Error in Subscription:', err.error);
        alert(err.error.message);
        return throwError(err.error); // Rethrow it back to component
      })
    );
  }
}
