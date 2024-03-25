import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-orange-button',
    templateUrl: './orange-button.component.html',
    styleUrls: ['./orange-button.component.scss'],
    standalone: true
})
export class OrangeButtonComponent {
    @Input() text: string = 'Get started';
    
    constructor() { }    

}
