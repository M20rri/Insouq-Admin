import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../../features/auth/auth.service';
import { UserStorageService } from '../services/user-storage.service';
import { CONSTANTS } from 'src/app/shared/constants';
import { filter } from 'rxjs/operators';
import { PrivillageResponse } from 'src/app/features/user-management/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private _authservice: AuthService,
    private router: Router,
    private userStorageService: UserStorageService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // get role based authentixation
    let roleBasedAuthorizations: string = this.userStorageService.get(
      CONSTANTS.ROLEBASEDAUTHURIZATION
    );

    let accessRoles = JSON.parse(roleBasedAuthorizations);
    console.log('accessRoles', accessRoles);

    let currentRoute = state.url.substring(1);
    console.log('currentRoute', currentRoute);

    if (!this._authservice.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }

    const isExists = accessRoles.some(
      (item: PrivillageResponse) => item.page === currentRoute
    );

    if (!isExists) {
      alert('you re not authorize to access this page');
      return false;
    }
    // here i will apply more check for pages
    return true;
  }
}
