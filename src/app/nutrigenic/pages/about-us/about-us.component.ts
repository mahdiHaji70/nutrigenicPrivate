import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ResizeDetectionService } from '../../services/resize-detection.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss', './about-us-mobile.component.scss', './about-us-tablet.component.scss']
})
export class AboutUsComponent {
    coreValues: any[];
    hoveredCoreValue: string | null = null;
    images: string[] = [];
    currentIndex: number = 0;
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;

    constructor(private router: Router,
        private sizedetection: ResizeDetectionService) {
        this.coreValues = [
            {
                imgUrl: '../../../../assets/images/laurel-wreath-first.png',
                title: 'Exemplary',
                subTitle: 'ingredients',
                description: 'We are dedicated to using the finest ingredients to prepare nutritious meals that help customers achieve their health and fitness goals.'
            },
            {
                imgUrl: '../../../../assets/images/user-star.png',
                title: 'Honest and',
                subTitle: 'transparent',
                description: 'We provide clear and honest information regarding our ingredients, nutritional details, food preparation methods, and ethical practices in all aspects of our business.'
            },
            {
                imgUrl: '../../../../assets/images/green-house.png',
                title: 'Envirormental',
                subTitle: 'Conscious',
                description: 'We prioritize sustainability by implementing eco-friendly practices in ingredient sourcing, packaging, and waste management.'
            },
            {
                imgUrl: '../../../../assets/images/location-user.png',
                title: 'Customer',
                subTitle: 'Centric',
                description: 'Customer satisfaction is our top priority, and we prioritize meeting customer needs, addressing feedback, and ensuring satisfaction with our meal prep service.'
            },
            {
                imgUrl: '../../../../assets/images/user-group.png',
                title: 'Community',
                subTitle: 'support',
                description: 'We are committed to supporting our community by engaging with local charitable organizations, participating in volunteer work, and finding diverse ways to give back.'
            },
            {
                imgUrl: '../../../../assets/images/halal.png',
                title: 'Halal',
                subTitle: 'certified',
                description: 'We are dedicated to offering halal-certified food,adhering to Islamic dietary laws with an unwavering commitment to purity and quality.'
            },
        ];

        this.images = [
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
            '../../../../assets/images/laurel-wreath-first.png',
        ];
        this.startRotation();
    }

    ngOnInit(){
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;

          });
    }

    startRotation(): void {
        setInterval(() => {
            this.rotateImages();
        }, 5000);
    }

    rotateImages(): void {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

}
