import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
    mealsList: any[] = [];
    constructor() { 
        this.mealsList = [
            {
                img: '../../../../assets/images/checkout-list.png',
                text: 'Dark green vegetables',
                count: 1
            },
            {
                img: '../../../../assets/images/checkout-list.png',
                text: 'Dark green vegetables',
                count: 1
            },
            {
                img: '../../../../assets/images/checkout-list.png',
                text: 'Dark green vegetables',
                count: 1
            },
            {
                img: '../../../../assets/images/checkout-list.png',
                text: 'Dark green vegetables',
                count: 1
            },
            {
                img: '../../../../assets/images/checkout-list.png',
                text: 'Dark green vegetables',
                count: 1
            }
        ]
    }    

}
