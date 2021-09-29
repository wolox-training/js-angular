import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/* Environments */
import { environment } from '@environments/environment'

/* Modules */
import { UserServiceModule } from '@services/user/user.service.module';
/* Types */
import { ResponseUserPost, UserResponse, UserToCreate } from '@services/user/user.types';

@Injectable({
  providedIn: UserServiceModule
})
export class UserService {

  private readonly API = `${environment.baseUrl}/${environment.version}`;
  constructor(
    private readonly http: HttpClient
  ) { }

  public create(user: UserToCreate): Observable<UserResponse> {
    return this.http.post<ResponseUserPost | UserResponse>(`${this.API}/users`, user).pipe(
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
}
