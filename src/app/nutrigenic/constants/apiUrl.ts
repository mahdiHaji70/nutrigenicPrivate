export class ApiUrl {
  private static get baseUrl(): string {
   return 'https://admin.nutrigenic.co.uk/api/';
    //  return 'https://92.205.191.225/api/';
  }

  static get basrUrl(): string {
    return this.baseUrl;
  }

  static get login(): string {
    return this.baseUrl + 'auth/login';
  }

  static get signup(): string {
    return this.baseUrl + 'auth/signup';
  }

  static get loginWithGoogle(): string {
    return this.baseUrl + 'auth/google';
  }

  static get activate(): string {
    return this.baseUrl + 'auth/activate';
  }

  static get userProfile(): string {
    return this.baseUrl + 'profile';
  }

  static get setWeight(): string {
    return this.baseUrl + 'biometrics/weight';
  }
}
