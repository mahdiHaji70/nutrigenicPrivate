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
    constructor(private router: Router) {}

    ngOnInit(){
        this.listCardData = [
            {
                imgUrl: '../../../../assets/images/masterImage.png',
                title: 'Almond Protein',
                description: 'The best part is that green leafy vegetables',
                price: '$206.60'
            },
         ];
    }

}