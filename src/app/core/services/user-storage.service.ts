import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  getToken(): any {
    return this.get<any>(CONSTANTS.TOKEN) || null;
  }

  set<TItem>(key: string, value: TItem) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<TItem>(key: string): TItem {
    return JSON.parse(localStorage.getItem(key) as string) as TItem;
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}
