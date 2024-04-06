import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import notiflix from 'notiflix';
import { MenuItem } from 'primeng/api';
import { LoginModel } from 'src/app/nutrigenic/models/auth/login-model';
import { SignUpModel } from 'src/app/nutrigenic/models/auth/signup-model';
import { AuthService } from 'src/app/nutrigenic/services/auth/auth.service';
import { JwtTokenService } from 'src/app/nutrigenic/services/auth/jwt-token.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonDirective } from '@abacritt/angularx-social-login';
import { ResizeDetectionService } from 'src/app/nutrigenic/services/resize-detection.service';

//declare const gapi: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    loginModel: LoginModel = new LoginModel();
    signupModel: SignUpModel = new SignUpModel();
    menuItems: any[] = [];
    selectedItem?: string | null;
    items: MenuItem[] = [];
    loginPopupVisibility = false;
    signUpPopupVisibility = false;
    isLogin: boolean = false;
    userName: string = 'Login';
    signupDone: boolean = false;
    accessToken: string = '';
    GoogleLoginProvider = GoogleLoginProvider;
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;

    constructor(private router: Router,
        private authService: AuthService,
        private jwtTokenService: JwtTokenService,
        private googleAuthService: SocialAuthService,
        private sizedetection: ResizeDetectionService) {
    }
    ngOnInit(): void {
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;
        });

        this.checkUser();

        this.selectedItem = this.router.url.replace('/', '');

        this.items = [
            {
                label: 'Home',
                url: 'home',
                command: () => this.onItemClick({ label: 'Home', url: 'home' })
            },
            {
                label: 'About us',
                command: () => this.onItemClick({ label: 'About Us', url: 'about-us' }),
                url: 'about-us'
            },
            {
                label: 'Blog',
                command: () => this.onItemClick({ label: 'Blog', url: 'blog' }),
                url: 'blog'
            },
            {
                label: 'Plans',
                command: () => this.onItemClick({ label: 'Plans', url: 'plans' }),
                url: 'plans'
            },
            {
                label: 'Our shop',
                command: () => this.onItemClick({ label: 'Our shop', url: 'our-shop' }),
                url: 'our-shop'
            }
        ];

    }

    get containerClass(): any {
        return {
            'layout-theme-light': 'light',
            'layout-overlay': 'overlay',
            'layout-static': 'static',
            'layout-static-inactive': 'static',
            'layout-overlay-active': false,
            'layout-mobile-active': false,
            'p-input-filled': 'filled',
            'p-ripple-disabled': !true
        };
    }

    handleMenuItemClick(event:any){
        event.preventDefault();
    }

    onItemClick(item: any): void {
        this.selectedItem = item.url;
        this.router
            .navigate(['/' + item.url])
            .then(() => { })
            .catch(() => { });
    }

    goToCheckOut() {
        this.router
            .navigate(['/checkout'])
            .then(() => { })
            .catch(() => { });
    }

    loginPopupManager() {
        if (this.isLogin) {
            this.router
                .navigate(['/profile'])
                .then(() => { })
                .catch(() => { });
        }
        else {
            this.loginPopupVisibility = !this.loginPopupVisibility;
            this.handleBlurFilter();
        }
    }

    signUpLinkToSignIn() {
        this.signUpPopupVisibility = false;
        this.loginPopupVisibility = true;
        this.handleBlurFilter();
    }

    signInLinkToSignUp() {
        this.loginPopupVisibility = false;
        this.signUpPopupVisibility = true;
        this.handleBlurFilter();
    }

    onDialogHide() {
        this.handleBlurFilter();
    }

    handleBlurFilter() {
        if (this.loginPopupVisibility || this.signUpPopupVisibility) {
            document.getElementById('layoutHome')?.classList.add('p-dialog-blur');
            document.getElementById('layoutHeader')?.classList.add('p-dialog-blur');
        }
        else {
            document.getElementById('layoutHome')?.classList.remove('p-dialog-blur');
            document.getElementById('layoutHeader')?.classList.remove('p-dialog-blur');
        }
    }

    checkUser() {
        this.jwtTokenService.getIsLogin().subscribe((data: any) => {
            this.isLogin = data;
            if (this.isLogin) {
                this.userName = this.jwtTokenService.getUserName();
            }
        });
    }

    login() {
        this.authService.login(this.loginModel).subscribe(
            {
                next: this.handleLoginResponse.bind(this),
                error: this.handleError.bind(this),
            }
        );;
    }

    loginWithGoogle() {
        this.googleAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
            .then((res) => {
                this.loginPopupVisibility = !this.loginPopupVisibility;
                this.handleBlurFilter();
                this.authService.loginWithGoogle(res).subscribe({
                    next: this.handleSignInWithGoogleResponse.bind(this),
                    error: this.handleError.bind(this)
                });
                console.log(res)
            }).catch((error) => {
                console.log(error);
            });
    }

    signUp() {
        this.authService.signUp(this.signupModel).subscribe(
            {
                next: this.handleSignupResponse.bind(this),
                error: this.handleError.bind(this),
            }
        )
    }


    handleLoginResponse(response: any) {
        const token = response.body.tokens.access_token;
        const userName = response.body.user.first_name + ' ' + response.body.user.last_name;

        this.jwtTokenService.setToken(token);
        this.jwtTokenService.setUserName(userName);

        this.jwtTokenService.getIsLogin().subscribe((data: any) => {
            this.isLogin = data;
            this.userName = this.jwtTokenService.getUserName();
            this.loginPopupVisibility = !this.loginPopupVisibility;
            this.handleBlurFilter();
        });
    }

    hidePassword = true;

    togglePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }

    handleSignupResponse(response: any) {
        console.log('RESPONSE ', response);
        this.signUpPopupVisibility = false;
        this.signupDone = true;
        // if(response) {

        // }

    }

    handleSignInWithGoogleResponse(response: any) {
        var x = response;
    }

    handleError(error: any): void {
        notiflix.Notify.failure(error.error.message + '- Operation unsuccessful', {
            position: 'right-top',
            timeout: 3000
        });
    }
}
