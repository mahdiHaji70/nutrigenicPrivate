import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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
    constructor() {
    }
    ngOnInit() {
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
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    onItemClick(item: any): void {
        this.selectedMasterTab = item.label;
    }
}
