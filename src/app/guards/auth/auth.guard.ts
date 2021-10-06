import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthGuardModule } from '@guards/auth/auth.guard.module';

/* Constants */
import { ROUTE_ROOT, buildRedirectRoute } from '@constants/routes';
import { KEYS_STORAGE } from '@constants/storageKeys';

/* External services */
import { StorageService } from '@services/storage/storage.service';

@Injectable({
  providedIn: AuthGuardModule
})
export class AuthGuard implements CanLoad {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  canLoad(): boolean {
    if (this.isAuth()) {
      return true
    }
    this.router.navigateByUrl(buildRedirectRoute(ROUTE_ROOT))
    return false;
  }

  private isAuth(): boolean {
    return Boolean(this.storageService.localGetItem(KEYS_STORAGE.access_token))
  }
}
