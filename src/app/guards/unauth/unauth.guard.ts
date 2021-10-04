import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { UnauthGuardModule } from './unauth.guard.module';

/* Constants */
import { ROUTE_BOOKS } from '@constants/routes';
import { KEYS_STORAGE } from '@constants/storageKeys';

/* External services */
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: UnauthGuardModule
})
export class UnauthGuard implements CanLoad {

  constructor(
    private readonly router: Router,
    public readonly storageService: StorageService
  ) { }

  canLoad() {
    if (this.isAuth()) {
      //Redirect to route books
      //this.router.navigateByUrl(ROUTE_BOOKS)
      return true
    }
    return true;
  }

  private isAuth(): boolean {
    return Boolean(this.storageService.localGetItem(KEYS_STORAGE.LOCALSTORAGE.access_token))
  }
}
