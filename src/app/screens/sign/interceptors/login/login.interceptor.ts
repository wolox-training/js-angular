import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
import { map, mergeMap, tap, } from 'rxjs/operators';

/* Constants */
import { KEYS_STORAGE } from '@constants/storageKeys';
import { HEADER_ACCESS_TOKEN, HEADER_CLIENT } from '@constants/headers';

/* External services */
import { StorageService } from '@services/storage/storage.service';

/* Tyeps */
import { ResponseLogin } from '@services/user/user.types';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    public readonly router: Router,
    public readonly storageService: StorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      mergeMap((event: HttpEvent<any>) => {
        return iif(() => event instanceof HttpResponse, this.mapperLogin(event), of(event))
      })
    )
  }

  private mapperLogin(httpEvent: HttpEvent<any>): Observable<HttpResponse<any>> {
    return of(httpEvent).pipe(
      map((event: HttpEvent<any>) => event as HttpResponse<any>),
      map((event: HttpResponse<any>) => {
        const newBody = this.buildPayloadResponse(event.body);
        return event.clone({ body: newBody });
      }),
      tap((event: HttpResponse<any>) => {
        const accessToken = event.headers.get(HEADER_ACCESS_TOKEN);
        const client = event.headers.get(HEADER_CLIENT)
        const body = event.body.data
        this.storageService.localSetItem(KEYS_STORAGE.access_token, accessToken);
        this.storageService.localSetItem(KEYS_STORAGE.client, client);
        this.storageService.localSetItem(KEYS_STORAGE.user, body);
      })
    )
  }

  private buildPayloadResponse(responsee: any): ResponseLogin {
    return {
      data: responsee.data,
      success: true,
      errors: []
    }
  }
}
