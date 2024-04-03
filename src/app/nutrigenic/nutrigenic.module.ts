import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NutrigenicRoutingModule } from './nutrigenic-routing.module';
import { NutrigenicComponent } from './nutrigenic.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './pages/home/home.component';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { PlanComponent } from './pages/plan/plan.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { DialogModule } from 'primeng/dialog';
import { OurShopComponent } from './pages/ourshop/ourshop.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { OrangeButtonComponent } from './layout/components/orange-button/orange-button.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { UserProfileComponent } from './pages/profile/user-profile/user-profile.component';
import { ConnectCardComponent } from './pages/profile/connect-card/connect-card.component';
import { MyOrdersComponent } from './pages/profile/my-orders/my-orders.component';
import { UserExpertComponent } from './pages/profile/user-expert/user-expert.component';
import { UserMealsComponent } from './pages/profile/user-meals/user-meals.component';
import { CreditCardsComponent } from './pages/profile/credit-cards/credit-cards.component';
import { AccountComponent } from './pages/profile/account/account.component';
import { AuthService } from './services/auth/auth.service';
import { JwtTokenService } from './services/auth/jwt-token.service';
import { ApiServiceCall } from './services/global.apiServicecall';
import { PasswordModule } from 'primeng/password';
import { GoogleLoginProvider, GoogleSigninButtonDirective, GoogleSigninButtonModule,SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { UserProfileService } from './services/profile/user-profile.service';
import { ResizeDetectionService } from './services/resize-detection.service';
import { ActivateComponent } from './pages/activate/activate.component';

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
        OurShopComponent,
        ProfileComponent,
        UserProfileComponent,
        ConnectCardComponent,
        MyOrdersComponent,
        UserExpertComponent,
        UserMealsComponent,
        CheckoutComponent,
        AccountComponent,
        CreditCardsComponent,
        ActivateComponent
    ],
    imports: [
        CommonModule,
        NutrigenicRoutingModule,
        MenubarModule,
        DividerModule,
        CarouselModule,
        DialogModule,
        RatingModule,
        FormsModule,
        OrangeButtonComponent,
        DropdownModule,
        PasswordModule,
        GoogleSigninButtonModule,
        ScrollPanelModule
    ],
    exports: [GoogleSigninButtonDirective],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '1083792866672-i9ss790f42nf1kb4on2e1j2lh9hf31kc.apps.googleusercontent.com', {
                                scopes: 'profile email'
                              }
                        )
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        },
        ApiServiceCall,
        AuthService,
        JwtTokenService,
        UserProfileService,
        ResizeDetectionService
    ]
})
export class NutrigenicModule { }
