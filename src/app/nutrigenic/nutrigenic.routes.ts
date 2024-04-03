import { Routes } from '@angular/router';
import { NutrigenicComponent } from './nutrigenic.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from './pages/plan/plan.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { OurShopComponent } from './pages/ourshop/ourshop.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ActivateComponent } from './pages/activate/activate.component';

export const NutrigenicRoutes: Routes = [
    {
        path: '',
        component: NutrigenicComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'plans', component: PlanComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'blogDetail', component: BlogDetailComponent },
            { path: 'our-shop', component: OurShopComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'activate/:token', component: ActivateComponent },
        ]
    }
];
