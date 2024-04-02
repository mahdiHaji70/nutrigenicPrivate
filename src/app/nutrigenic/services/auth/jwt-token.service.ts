import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

@Injectable()
export class JwtTokenService {
  private jwtHelper = new JwtHelperService();

  constructor(
  ) { }

  GetUserId(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode.jwtDecode(token) as {
        id: string;
        type: string;
        email: string;
      };
      return decodedToken.id;
    } else return '0';
  }

  setToken(token: string, session: boolean = false): void {
    this.removeToken();

    if (session) {
      sessionStorage.setItem('token', token);
    } else {
      localStorage.setItem('token', token);
    }
  }

  getIsLogin(): Observable<boolean> {
    const localToken = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    if (localToken && userName && !this.jwtHelper.isTokenExpired(localToken)) {
      return of(true);
    }
    else{
      this.removeToken();
      this.removeUserName();
      return of(false);
    }
  }

  getToken(): string | null {
    const sessionToken = sessionStorage.getItem('token');
    const localToken = localStorage.getItem('token');
    const token = sessionToken || localToken;

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return token;
    }

    this.removeToken();
    return null;
  }

  removeToken(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }

  setUserName(userName: string): void {
    this.removeUserName();
    localStorage.setItem('userName', userName);
  }

  getUserName(): string {
    const localToken = localStorage.getItem('token')
    const userName = localStorage.getItem('userName')

    if (localToken && !this.jwtHelper.isTokenExpired(localToken)) {
      return userName!;
    }

    this.removeUserName();
    return '';
  }

  removeUserName(): void {
    sessionStorage.removeItem('userName');
  }

}
