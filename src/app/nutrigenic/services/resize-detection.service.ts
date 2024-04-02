import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResizeDetectionService {
    private isSizeConditionSubject = new Subject<any>();
    isMobile: boolean = false;
    isTablet: boolean = false;
    isDesktop: boolean = false;
    sizeCondition$: Observable<any> = this.isSizeConditionSubject.asObservable();

    constructor() {
        this.refreshSize();
    }

    refreshSize() {
        setTimeout(() => {
            let isMobile = window.innerWidth <= 500;
            let isTablet = window.innerWidth > 500 && window.innerWidth <= 979;
            let isDesktop = window.innerWidth >= 980;
            let init = {
                isMobile: isMobile,
                isTablet: isTablet,
                isDesktop: isDesktop
            };
            this.isSizeConditionSubject.next(init);
        }, 100);
    }

    updateConditions(isMobile: boolean, isTablet: boolean, isDesktop: boolean): void {
        let init = {
            isMobile: isMobile,
            isTablet: isTablet,
            isDesktop: isDesktop
        };
        this.isSizeConditionSubject.next(init);
    }
}