export class SignUpModel {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation?: string;
    phone_number?: string;
    birth_date?: string;
    gender?: string;
    height?: number;


    constructor(){
        this.email = '';
        this.first_name = '';
        this.last_name = '';
        this.password = '';
        this.password_confirmation = '';
        this.phone_number = '';
        this.birth_date = '';
        this.gender = '';
        this.height = 0;
    }
}