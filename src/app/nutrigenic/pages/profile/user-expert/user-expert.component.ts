import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user-expert',
    templateUrl: './user-expert.component.html',
    styleUrls: ['./user-expert.component.scss']
})
export class UserExpertComponent {
    value: number = 4;
    constructor() { 

    }    

}
