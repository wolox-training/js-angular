import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/* Modules */
import { UserServiceModule } from '@services/user/user.service.module';
/* Types */
import { ResponseUserPost, UserResponse, UserToCreate, UserLogin, UserLoginResponse, ResponseLogin } from '@services/user/user.types';
/* End points */
import { API_SIGN_UP, API_SIGN_IN } from '@services/user/user.endpoints';

@Injectable({
  providedIn: UserServiceModule
})
export class UserService {
  constructor(
    private readonly http: HttpClient
  ) { }

  public create(user: UserToCreate): Observable<UserResponse> {
    return this.http.post<ResponseUserPost | UserResponse>(API_SIGN_UP, user).pipe(
      map((res: ResponseUserPost | UserResponse) => {
        if ('status' in res && res.status !== 'success') {
          throw new Error('Wrong data')
        }
        return res as UserResponse
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }

  public login(user: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<ResponseLogin>(API_SIGN_IN, user)
      .pipe(
        map((res: ResponseLogin) => {
          if (!res.success) {
            throw new Error('no login')
          }
          return res.data
        }),
        catchError(e => throwError(e))
      )
  }
}
