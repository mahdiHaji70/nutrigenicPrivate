import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user-meals',
    templateUrl: './user-meals.component.html',
    styleUrls: ['./user-meals.component.scss']
})
export class UserMealsComponent {
    orders: any[] = [];

    constructor() { 
        this.orders = [
            {
                title: 'Flexi',
                statusId: 1,
                status: 'See changes'
            },
            {
                title: 'Flexi',
                statusId: 2,
                status: 'in revision'
            },
            {
                title: 'Flexi',
                statusId: 3,
                status: 'Approved'
            },
            {
                title: 'Flexi',
                statusId: 3,
                status: 'Approved'
            },
            {
                title: 'Flexi',
                statusId: 3,
                status: 'Approved'
            },
        ];
    }    

}
