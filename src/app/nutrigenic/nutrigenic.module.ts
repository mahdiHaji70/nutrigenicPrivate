import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NutrigenicRoutingModule } from './nutrigenic-routing.module';
import { NutrigenicComponent } from './nutrigenic.component';
import { HeaderComponent } from './layout/components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { HomeComponent } from './pages/home/home.component';
import { DividerModule } from 'primeng/divider';
import {CarouselModule} from 'primeng/carousel';
import { PlanComponent } from './pages/plan/plan.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { DialogModule } from 'primeng/dialog';
import { OurShopComponent } from './pages/ourshop/ourshop.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        NutrigenicComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PlanComponent,
        AboutUsComponent,
        BlogComponent,
        BlogDetailComponent,
        OurShopComponent
    ],
    imports: [
        CommonModule,
        NutrigenicRoutingModule,
        MenubarModule,
        DividerModule,
        CarouselModule,
        DialogModule,
        RatingModule,
        FormsModule
    ],
    exports: [],
    providers: [

    ]
})
export class NutrigenicModule { }
