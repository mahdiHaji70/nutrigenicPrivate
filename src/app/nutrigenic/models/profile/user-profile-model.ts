export class UserProfileModel {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birth_date: string;
    is_active: boolean;
    gender: string;
    height: number;
    weight: number;
    imc: string;
    photo_path: string;
    managed_by_expert: any;
    has_to_upload_photo: boolean;
    has_to_update_weight: boolean;
    has_unseen_notes: boolean;

    constructor(){
        this.id = 0;
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.phone_number = '';
        this.birth_date = '';
        this.is_active = false;
        this.gender = '';
        this.weight = 0;
        this.height = 0;
        this.imc = '';
        this.photo_path = '';
        this.has_to_upload_photo = false;
        this.has_to_update_weight = false;
        this.has_unseen_notes = false;
    }
        
        

}