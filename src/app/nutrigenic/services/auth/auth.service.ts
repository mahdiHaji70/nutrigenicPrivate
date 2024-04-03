import { Injectable } from "@angular/core";
import { ApiServiceCall } from "../global.apiServicecall";
import { ApiUrl } from "../../constants/apiUrl";
import { JwtTokenService } from "./jwt-token.service";
import { LoginModel } from "../../models/auth/login-model";
import notiflix from 'notiflix';
import { Observable } from "rxjs";
import { OperationResult } from "../../models/operation-result";
import { SignUpModel } from "../../models/auth/signup-model";

@Injectable()
export class AuthService {
  constructor(
    private serviceCall: ApiServiceCall,
    private jwtTokenservice: JwtTokenService
  ) { }

  login(loginModel: LoginModel): Observable<OperationResult<any>> {
    let _url = ApiUrl.login;
    return this.serviceCall.Post(_url, false, loginModel);
  }

  signUp(signupModel: SignUpModel): Observable<OperationResult<any>> {
    let _url = ApiUrl.signup;
    return this.serviceCall.Post(_url, false, signupModel);
  }

  loginWithGoogle(access_token: any): Observable<OperationResult<any>> {
    let _url = ApiUrl.loginWithGoogle;
    return this.serviceCall.Post(_url, false, { access_token: access_token });
  }

  activateUser(token: any) {
    let _url = ApiUrl.activate + `/${token}`;
    return this.serviceCall.GET(_url, false, null);
  }

}