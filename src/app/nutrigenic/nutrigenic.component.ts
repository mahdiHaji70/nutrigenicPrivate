import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeDetectionService } from './services/resize-detection.service';

@Component({
  selector: 'app-nutrigenic',
  templateUrl: './nutrigenic.component.html',
  styleUrls: ['./nutrigenic.component.scss']
})
export class NutrigenicComponent {
  underConstruction: boolean = true;
  isTablet: boolean = false;
  isMobile: boolean = false;
  isDesktop: boolean = false;

  constructor(private router: Router,
    private sizedetection: ResizeDetectionService) {
    this.router
    .navigate(['/home'])
    .then(() => { })
    .catch(() => { });
  }

  ngOnInit() {
    this.sizedetection.refreshSize();
    this.sizedetection.sizeCondition$.subscribe(data => {
        this.isDesktop = data.isDesktop;
        this.isTablet = data.isTablet;
        this.isMobile = data.isMobile;

      });
  }
  get containerClass(): any {
    return {
      'layout-theme-light': 'light',
      'layout-overlay': 'overlay',
      'layout-static': 'static',
      'layout-static-inactive': 'static',
      'layout-overlay-active': false,
      'layout-mobile-active': false,
      'p-input-filled': 'filled',
      'p-ripple-disabled': !true
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    let isMobile = window.innerWidth <= 500;
    let isTablet = window.innerWidth > 500 && window.innerWidth <= 979;
    let isDesktop = window.innerWidth >= 980;
    this.sizedetection.updateConditions(isMobile, isTablet, isDesktop);
  }
}
