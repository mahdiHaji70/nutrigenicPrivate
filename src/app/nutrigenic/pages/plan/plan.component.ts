import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
    selectedFlexiDaymealButton: number = 2;
    selectedFlexiWeekmealButton: number = 3;
    selectedCommitDaymealButton: number = 2;
    selectedCommitWeekmealButton: number = 3;
    selectedCommitWeeksButton: string = '4w';
    constructor() { }

    selectButton(buttonList: string, buttonNumber: number) {
        if (buttonList == 'flexiDay')
            this.selectedFlexiDaymealButton = buttonNumber;
        if (buttonList == 'flexiWeek')
            this.selectedFlexiWeekmealButton = buttonNumber;
        if (buttonList == 'commitDay')
            this.selectedCommitDaymealButton = buttonNumber;
        if (buttonList == 'commitWeek')
            this.selectedCommitWeekmealButton = buttonNumber;
    }

    selectWeeksNumber(buttonNumber: string) {
        this.selectedCommitWeeksButton = buttonNumber;
    }
}