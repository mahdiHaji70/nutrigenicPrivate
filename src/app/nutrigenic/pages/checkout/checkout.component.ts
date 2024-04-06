import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ResizeDetectionService } from '../../services/resize-detection.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
    mealsList: any[] = [];
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;
    constructor(private sizedetection: ResizeDetectionService) { 
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;
        });
        
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
