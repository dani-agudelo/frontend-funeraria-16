import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { LoginResponse, User } from '../interfaces';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { CheckTokenResponse } from '../interfaces/check-token.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //? Al mundo exterior!
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication( user: User, token: string ): boolean {
    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);
    return true;
  }

  login( email: string, password: string ): Observable<boolean> {
    
    //* baseUrl = http://localhost:8081/api por ejemplo
    const url = `${ this.baseUrl }/login`;
    const bodyHttp = { email, password };

    return this.http.post<LoginResponse>( url, bodyHttp )
      .pipe(
        map( ({user, token}) => {
          return this.setAuthentication( user, token );
        }),
        catchError( err => throwError( () => err.error.message )),
      )
  }

  checkAuthStatus(): Observable<boolean> {
    
    const url = `${ this.baseUrl }/auth/check-token`;
    const token = localStorage.getItem('token');

    if( !token ) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`);

    return this.http.get<CheckTokenResponse>( url, { headers } )
      .pipe(
        map((({ token, user }) => {
          console.log(user, token)
          return this.setAuthentication( user, token );
        })),
        catchError(() => {
          this._authStatus.set( AuthStatus.notAuthenticated );
          return of(false);
        })
      )
  }

  logout(): void {
    localStorage.removeItem('token');
    this._currentUser.set( null );
    this._authStatus.set( AuthStatus.notAuthenticated );
  }

}
