import { Injectable } from '@angular/core';
import { UserStorageService } from '../../core/services/user-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userStorageService: UserStorageService) {}

  isLoggedIn() {
    return this.userStorageService.getToken() ? true : false; // add your strong logic
  }
}
