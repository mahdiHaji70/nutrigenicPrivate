import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrigenic',
  templateUrl: './nutrigenic.component.html',
  styleUrls: ['./nutrigenic.component.scss']
})
export class NutrigenicComponent {
  underConstruction: boolean = false;
  
  constructor(private router: Router){
    // this.router
    // .navigate(['/home'])
    // .then(() => { })
    // .catch(() => { });
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
}
