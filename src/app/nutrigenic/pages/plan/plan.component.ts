import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { ResizeDetectionService } from '../../services/resize-detection.service';

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
    isTablet: boolean = false;
    isMobile: boolean = false;
    isDesktop: boolean = false;
    constructor(private sizedetection: ResizeDetectionService) { }

    ngOnInit(){
        this.sizedetection.refreshSize();
        this.sizedetection.sizeCondition$.subscribe(data => {
            this.isDesktop = data.isDesktop;
            this.isTablet = data.isTablet;
            this.isMobile = data.isMobile;

          });
    }

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