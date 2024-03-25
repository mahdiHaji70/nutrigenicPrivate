import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-credit-cards',
    templateUrl: './credit-cards.component.html',
    styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent {
    creditCards: any[]=[]
    constructor() { 
        this.creditCards = [
            {
                type: 'Mastercard',
                number: '**** 1234',
                expire: '10/24',                
            },
            {
                type: 'Mastercard',
                number: '**** 1234',
                expire: '10/24',                
            },
            {
                type: 'Mastercard',
                number: '**** 1234',
                expire: '10/24',                
            },
            {
                type: 'Mastercard',
                number: '**** 1234',
                expire: '10/24',                
            },
            {
                type: 'Mastercard',
                number: '**** 1234',
                expire: '10/24',                
            },
              
        ];
    }    

}
