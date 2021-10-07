import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

/* Services */
import { StorageService } from '@services/storage/storage.service';

/* Constants */
import { HEADER_CLIENT, HEADER_ACCESS_TOKEN, HEADER_UID } from '@constants/headers';
import { KEYS_STORAGE } from '@constants/storageKeys';
import { UserLoginResponse } from '@services/user/user.types';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly storageService: StorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = request.clone({
      headers: this.buildMapHeaders()
    });
    return next.handle(cloneRequest);
  }

  private buildMapHeaders(): HttpHeaders {
    const uid = this.storageService.localGetItem<UserLoginResponse>(KEYS_STORAGE.user)?.uid || '';
    return new HttpHeaders()
      .set(HEADER_CLIENT, this.getValueFromStorage(KEYS_STORAGE.client))
      .set(HEADER_ACCESS_TOKEN, this.getValueFromStorage(KEYS_STORAGE.access_token))
      .set(HEADER_UID, uid);
  }

  private getValueFromStorage(key: string): string {
    return this.storageService.localGetItem(key) || ''
  }
}
