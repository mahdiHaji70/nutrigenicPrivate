import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { UserProfileService } from '../../services/profile/user-profile.service';
import { ResizeDetectionService } from '../../services/resize-detection.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', './home-mobile.component.scss', './home-tablet.component.scss']
})
export class HomeComponent {
    chefs: any[] = [];
    experts: any[] = [];
    masterPlanData: any[] = [];
    tabItems = ['Home', 'Musclde Gain', 'Weight Loss'];
    menuItems = ['Home', 'About us', 'Privacy Policy', 'Terms & Conditions', 'FAQs'];
    selectedMasterTab: string | null = 'Home';
    comments: any = [];
    responsiveOptions: any[] = [];
    images: string[] = [];
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;
    constructor(private sizedetection: ResizeDetectionService) {
    }

    ngOnInit() {
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;

          });

        this.chefs = [
            {
                id: 1, name: 'name', sureName: 'Surename', imgUrl: '../../../../assets/images/Dish-right.png'
            },
            {
                id: 2, name: 'name2', sureName: 'Surename2', imgUrl: '../../../../assets/images/Dish-right.png'
            }
        ];

        this.experts = [
            {
                id: 1, name: 'name', sureName: 'Surename', imgUrl: '../../../../assets/images/Dish-right.png'
            },
            {
                id: 2, name: 'name2', sureName: 'Surename2', imgUrl: '../../../../assets/images/Dish-right.png'
            }
        ]

        this.masterPlanData = [
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr',imgUrl: '../../../../assets/images/masterImage.png' },
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr',imgUrl: '../../../../assets/images/masterImage.png' },
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr',imgUrl: '../../../../assets/images/masterImage.png' },
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr', imgUrl: '../../../../assets/images/masterImage.png'},
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr', imgUrl: '../../../../assets/images/masterImage.png'},
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr', imgUrl: '../../../../assets/images/masterImage.png'},
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr',imgUrl: '../../../../assets/images/masterImage.png' },
            {title: 'Dark green vegtables', description: 'The best part is that green leafy vegetables can be enjoyed in many ways.', calories: '220 kcal', fats: '4,3 gr', protein: '8,2 gr', carb: '8,2 gr', imgUrl: '../../../../assets/images/masterImage.png'}
        ];

        this.comments = [
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 2, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 1, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 3, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 2, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 4, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 3, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 2, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 1, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
            {stars: 5, time: '2 days ago', title: 'Best on the market', description: 'i love this product i love this product', user: 'worldTraveler'},
        ];

        this.images = [
            'assets/images/Ouichef.png',
            'assets/images/TH_Main.png',
            'assets/images/Salvo.png',
            'assets/images/clorence.png',
            'assets/images/Ouichef.png',
            'assets/images/TH_Main.png',
            'assets/images/Salvo.png',
            'assets/images/clorence.png',
            'assets/images/Ouichef.png',
            'assets/images/TH_Main.png',
            'assets/images/Salvo.png',
            'assets/images/clorence.png',
  ];
    }

    onItemClick(item: any): void {
        this.selectedMasterTab = item.label;
    }

    
}
