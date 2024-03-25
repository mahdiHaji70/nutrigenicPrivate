import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menuItems = [
        {
            name: 'Home',
            url: 'home'
        },
        {
            name: 'About us',
            url: 'about-us'
        },
        {
            name: 'Blog',
            url: 'blog'
        },
        {
            name: 'Plans',
            url: 'plans'
        },
        {
            name: 'Our shop',
            url: 'our-shop'
        }
    ];
    selectedItem?: string | null;
    items: MenuItem[] = [];
    loginPopupVisibility = false;
    signUpPopupVisibility = false;

    constructor(private router: Router) {

        //this.selectedItem = this.menuItems[0].name;
    }
    ngOnInit(): void {
        this.selectedItem = this.router.url.replace('/', '');

        this.items = [
            {
                label: 'Home',
                url: 'home',
                command: () => this.onItemClick({ label: 'Home' })
            },
            {
                label: 'About us',
                command: () => this.onItemClick({ label: 'About Us' }),
                url: 'about-us'
            },
            {
                label: 'Blog',
                command: () => this.onItemClick({ label: 'Blog' }),
                url: 'blog'
            },
            {
                label: 'Plans',
                command: () => this.onItemClick({ label: 'Plans' }),
                url: 'plans'
            },
            {
                label: 'Our shop',
                command: () => this.onItemClick({ label: 'Our shop' }),
                url: 'our-shop'
            },
            {
                label: 'Login',
                command: () => this.onItemClick({ label: 'Login' }),
                url: 'login'
            },
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

    onItemClick(item: any): void {
        this.selectedItem = item.url;
       
            this.router
                .navigate(['/' + item.url])
                .then(() => { })
                .catch(() => { });
    }

    goToCheckOut(){
        this.router
        .navigate(['/checkout'])
        .then(() => { })
        .catch(() => { });
    }

    loginPopupManager() {
        this.loginPopupVisibility = !this.loginPopupVisibility;
        this.handleBlurFilter();
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
}
