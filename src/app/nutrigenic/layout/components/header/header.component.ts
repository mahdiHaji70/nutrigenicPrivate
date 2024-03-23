import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    menuItems = ['Home', 'About us', 'Blog', 'Plans', 'Our shop'];
    selectedItem: string | null = 'Home';
    items: MenuItem[] = [];
    loginPopupVisibility = false;
    signUpPopupVisibility = false;

    constructor(private router: Router) { }
    ngOnInit(): void {
        this.selectedItem = this.router.url.replace('/', '') == 'AboutUs' ? 'About us' : this.router.url.replace('/', '');
        this.items = [
            {
                label: 'Home',
                command: () => this.onItemClick({ label: 'Home' })
            },
            {
                label: 'About us',
                command: () => this.onItemClick({ label: 'About Us' })
            },
            {
                label: 'Blog',
                command: () => this.onItemClick({ label: 'Blog' })
            },
            {
                label: 'Plans',
                command: () => this.onItemClick({ label: 'Plans' })
            },
            {
                label: 'Our shop',
                command: () => this.onItemClick({ label: 'Our shop' })
            },
            {
                label: 'Login',
                command: () => this.onItemClick({ label: 'Login' })
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
        this.selectedItem = item.label;
        if (item.label == 'About us')
            this.router
                .navigate(['/AboutUs'])
                .then(() => { })
                .catch(() => { });
       else  if (item.label == 'Our shop')
        this.router
            .navigate(['/OurShop'])
            .then(() => { })
            .catch(() => { });
        else
            this.router
                .navigate(['/' + item.label])
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
