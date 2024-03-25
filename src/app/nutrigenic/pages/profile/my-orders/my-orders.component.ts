import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
    orders: any[] = [];
    constructor() {
        this.orders = [
            {
                title: 'Flexi',
                weeks: 7,
                days: 6,
                meals: 3,
                total: '£87.00,60'
            },
            {
                title: 'Flexi',
                weeks: 1,
                days: 2,
                meals: 5,
                total: '£87.00,60'
            },
            {
                title: 'Flexi',
                weeks: 5,
                days: 3,
                meals: 6,
                total: '£87.00,60'
            },
            {
                title: 'Flexi',
                weeks: 3,
                days: 3,
                meals: 3,
                total: '£87.00,60'
            },
            {
                title: 'Flexi',
                weeks: 3,
                days: 3,
                meals: 3,
                total: '£87.00,60'
            },
            
        ];
    }

}
