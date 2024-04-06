import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeDetectionService } from '../../services/resize-detection.service';

@Component({
    selector: 'app-ourshop',
    templateUrl: './ourshop.component.html',
    styleUrls: ['./ourshop.component.scss']
})
export class OurShopComponent {
    tabItems = ['Snacks', 'Health boost ingredients', 'Fine Supplements', 'Vitamins'];
    selectedMasterTab: string | null = 'Snacks';
    listCardData: any[] = [];
    counter: number = 1;
    value: number = 4
    search: string = '';
    searchIcon = true;
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;

    constructor(private router: Router,
        private sizedetection: ResizeDetectionService) { }

    ngOnInit() {
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;
        });

        this.listCardData = [
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '€206.60'
            },
        ];
    }

    inputTextChange(event: any) {
        var x = event;
        if (this.search == '')
            this.searchIcon = true;
        else
            this.searchIcon = false;

    }

    increaseBtnClick() {
        this.counter = this.counter + 1;
    }

    decreaseBtnClick() {
        
            this.counter = this.counter == 1 ? 1 : this.counter - 1;
    }
}