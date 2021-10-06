import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UnauthGuardModule } from './unauth.guard.module';

/* Constants */
import { ROUTE_BOOKS, buildRedirectRoute } from '@constants/routes';
import { KEYS_STORAGE } from '@constants/storageKeys';

/* External services */
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: UnauthGuardModule
})
export class UnauthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    public readonly storageService: StorageService
  ) { }

  canActivate() {
    if (this.isAuth()) {
      //Redirect to route books
      this.router.navigateByUrl(buildRedirectRoute(ROUTE_BOOKS))
      return false;
    }
    return true;
  }

  private isAuth(): boolean {
    return Boolean(this.storageService.localGetItem(KEYS_STORAGE.access_token))
  }
}
