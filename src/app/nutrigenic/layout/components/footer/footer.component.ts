import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    selectedMasterTab: string | null = 'Home';
    menuItems = ['Home', 'About us', 'Privacy Policy', 'Terms & Conditions', 'FAQs'];

    constructor(private router: Router) { }
    onItemClick(item: any): void {
        this.selectedMasterTab = item.label;
    }
}
