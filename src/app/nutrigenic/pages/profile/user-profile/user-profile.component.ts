import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import notiflix from 'notiflix';
import { MenuItem } from 'primeng/api';
import { UserProfileModel } from 'src/app/nutrigenic/models/profile/user-profile-model';
import { JwtTokenService } from 'src/app/nutrigenic/services/auth/jwt-token.service';
import { UserProfileService } from 'src/app/nutrigenic/services/profile/user-profile.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
    addButtons: any[] = [];
    userName: string = 'User Name';
    userProfile: UserProfileModel;
    addBiometricPopupVisibility = false;
    value: string = '00.00';
    tabItems = ['Weight', 'BMI', 'Pictures', 'Blood test'];
    selectedTab: string | null = 'Weight';

    constructor(private router: Router, private jwtTokenService: JwtTokenService,
        private userProfileService: UserProfileService) {
            this.userProfile = new UserProfileModel();
        this.addButtons = [
            {
                id: 'weight',
                text: 'Add weight'
            },
            {
                id: 'BMC',
                text: 'Add BMC'
            },
            {
                id: 'pictures',
                text: 'Add pictures'
            },
            {
                id: 'blood',
                text: 'Add blood test'
            },
            {
                id: 'sports',
                text: 'Add sports'
            }
        ]
    }

    ngOnInit() {
        this.userProfileService.getUserProfile().subscribe({
            next: this.handleGetUserProfileResponse.bind(this),
            error: this.handleError.bind(this)
        });
        // this.jwtTokenService.getIsLogin().subscribe((data: any) => {
        //     if (data) {
        //         this.userName = this.jwtTokenService.getUserName();
        //     }
        //     else
        //         this.router
        //             .navigate(['/home'])
        //             .then(() => { })
        //             .catch(() => { });

        // });        
    }

    showBiometricPopup(){
        this.addBiometricPopupVisibility = !this.addBiometricPopupVisibility;
        //this.handleBlurFilter();
    }

    onDialogHide(){
        //this.handleBlurFilter();
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
      }
    
      onDrop(event: DragEvent) {
        event.preventDefault();
      }

      onFileSelected(event: any) {
        const file: File = event.target.files[0];
        console.log('Selected file:', file);
      }
    

    addUserWeight(){
        this.userProfileService.setUserWeight(parseFloat(this.value)).subscribe({
            next: this.handleSetUserWeightResponse.bind(this),
            error: this.handleError.bind(this)
        });
    }

    handleSetUserWeightResponse(response: any){
        notiflix.Notify.success(response.statusCode + '- Operation unsuccessful', {
            position: 'right-top',
            timeout: 3000
        });
    }

    handleGetUserProfileResponse(response: any) {
        this.userProfile.id = response.body.id;
        this.userProfile.first_name = response.body.first_name;
        this.userProfile.last_name = response.body.last_name;
        this.userProfile.email = response.body.email;
        this.userProfile.phone_number = response.body.phone_number;
        this.userProfile.birth_date = response.body.birth_date;
        this.userProfile.is_active = response.body.is_active;
        this.userProfile.gender = response.body.gender;
        this.userProfile.weight = response.body.weight;
        this.userProfile.height = response.body.height;
        this.userProfile.imc = response.body.imc;
        this.userProfile.photo_path = response.body.photo_path;
        this.userProfile.has_to_upload_photo = response.body.has_to_upload_photo;
        this.userProfile.has_to_update_weight = response.body.has_to_update_weight;
        this.userProfile.has_unseen_notes = response.body.has_unseen_notes;
        
    }

    handleError(error: any): void {
        notiflix.Notify.failure(error.message + '- Operation unsuccessful', {
            position: 'right-top',
            timeout: 3000
        });
    }

    handleBlurFilter() {
        if (this.addBiometricPopupVisibility) {
            document.getElementById('layoutHome')?.classList.add('p-dialog-blur');
            document.getElementById('layoutHeader')?.classList.add('p-dialog-blur');
        }
        else {
            document.getElementById('layoutHome')?.classList.remove('p-dialog-blur');
            document.getElementById('layoutHeader')?.classList.remove('p-dialog-blur');
        }
    }
}
