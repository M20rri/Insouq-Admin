import { Injectable } from '@angular/core';
import { ApiHelperService } from '../../core/services/api-helper.service';
import { BaseResponse } from '../../core/models/base-response.model';
import { PaginatedResult } from '../../core/models/paginated-result.model';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { HttpMethods } from '../../shared/enums/httpMethodsEnum';
import { Urls } from '../../../environments/urls';
@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private apiHelper: ApiHelperService) {}

  getUsers(): Observable<BaseResponse<PaginatedResult<User>>> {
    const endpoint = `${Urls.Controller.Users}${Urls.Common.GetAllPaginated}`;
    return this.apiHelper.request(HttpMethods.GET, endpoint);
  }
}
