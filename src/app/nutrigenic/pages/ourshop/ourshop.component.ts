import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    constructor(private router: Router) { }

    ngOnInit() {
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