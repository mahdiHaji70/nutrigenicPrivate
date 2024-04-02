import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { OperationResult } from '../models/operation-result';
import { HttpStatusCode } from '../models/http-status-code';
import queryString from 'query-string';

@Injectable()
export class ApiServiceCall {
  private refreshTokenInProgress = false;
  private headers = new HttpHeaders();

  private baseUrl: string = '';

  constructor(private httpClient: HttpClient) {
    this.headers = this.headers.set('Content-Type', 'application/json');
    
  }

  GET<T>(
    url: string,
    authorize: boolean,
    params: any = null
  ): Observable<HttpResponse<OperationResult<T>>> {
    if (authorize) 
      this.addTokenToHeader();

    let _url = this.baseUrl + url;
    if (params) {
      var query = queryString.stringify(params);
      if (query) {
        _url += '?' + query;
      }
    }
    return this.httpClient
      .get<OperationResult<T>>(_url, {
        headers: this.headers,
        observe: 'response'
      })
      .pipe();
  }

  Post<T>(
    url: string,
    authorize: boolean,
    params: any = null
  ): Observable<OperationResult<T>> {
    if (authorize) 
      this.addTokenToHeader();

    let _url = this.baseUrl + url;
    let body: any;
    if (params) {
      body = JSON.stringify(params);
    }
    return this.httpClient
      .post<OperationResult<T>>(_url, body!, {
        headers: this.headers,
        observe: 'response' as 'body'
      })
      .pipe();
  }

  Put<T>(url: string,
    authorize: boolean, params: any = null): Observable<OperationResult<T>> {
    if (authorize) 
      this.addTokenToHeader();

    let _url = this.baseUrl + url;
    let body: any;
    if (params) {
      body = JSON.stringify(params);
    }
    return this.httpClient
      .put<OperationResult<T>>(_url, body!, {
        headers: this.headers,
        observe: 'response' as 'body'
      })
      .pipe();
  }


  addTokenToHeader(): void {
    var jsonWebToken = localStorage.getItem('token');
    if (jsonWebToken)
      this.headers = this.headers.set(
        'Authorization',
        `Bearer ${jsonWebToken}`
      );
  }

  showUnhandheldError(HttpErrorResponse: any): void {
    switch (HttpErrorResponse.status) {
      case HttpStatusCode.unkownError:
        alert('Error Accured');
        break;
      case HttpStatusCode.badRequest:
        alert('Bad request');
        break;
      case HttpStatusCode.unAuthorized:
        alert('Un Authorized Error');
        break;
      case HttpStatusCode.notFoaund:
        alert(HttpErrorResponse.error.exceptionMessage);
        break;
      case HttpStatusCode.internalServerError:
        alert(HttpErrorResponse.error.exceptionMessage);
        break;
      default:
        alert(HttpErrorResponse.error.exceptionMessage);
        break;
    }
  }
}
