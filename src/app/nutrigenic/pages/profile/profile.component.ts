import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    menuItems: any[] = [];
    addButtons: any[] = [];
    selectedMenu:number = 1;
    constructor() { 
        this.menuItems = [
            {
                id: 1,
                text: 'Profile',
                img: '../../../../assets/images/user-profile.png'
            },
            {
                id: 2,
                text: 'My Orders',
                img: '../../../../assets/images/shopping-cart-02.png'
            },
            {
                id: 3,
                text: 'Expert',
                img: '../../../../assets/images/mentoring.png'
            },
            {
                id: 4,
                text: 'My own meals',
                img: '../../../../assets/images/apple-01.png'
            },
            {
                id: 5,
                text: 'Credit cards',
                img: '../../../../assets/images/credit-card.png'
            },
            {
                id: 6,
                text: 'Account',
                img: '../../../../assets/images/user-account.png'
            }
        ]

        this.addButtons = [
            {
                id: 'weight',
                text: 'Add weight'
            },
            {
                id: 'BMC',
                text: 'Add BMC'
            },
            {
                id: 'pictures',
                text: 'Add pictures'
            },
            {
                id: 'blood',
                text: 'Add blood test'
            },
            {
                id: 'sports',
                text: 'Add sports'
            }            
        ]
        this.selectedMenu = 1;
    }    

}
