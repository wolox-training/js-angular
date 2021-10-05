import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap, } from 'rxjs/operators';

/* Constants */
import { KEYS_STORAGE } from '@constants/storageKeys';

/* External services */
import { StorageService } from '@services/storage/storage.service';

/* Tyeps */
import { ResponseLogin } from '@services/user/user.types';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  private readonly authHeader: string = 'Access-Token'
  constructor(
    public readonly router: Router,
    public readonly storageService: StorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      map((event: HttpEvent<any>) => event as HttpResponse<any>),
      map((event: HttpResponse<any>) => {
        const newBody = this.buildPayloadResponse(event.body)
        return event.clone({ body: newBody })
      }),
      tap((event: HttpResponse<any>) => {
        this.storageService.localSetItem(KEYS_STORAGE.LOCALSTORAGE.access_token, event.headers.get(this.authHeader))
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
