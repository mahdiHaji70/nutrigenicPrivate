import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';
import notiflix from 'notiflix';

@Component({
    selector: 'app-activate',
    templateUrl: './activate.component.html',
    styleUrls: ['./activate.component.scss']
})
export class ActivateComponent {
    token?: string | null;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.token = this.route.snapshot.paramMap.get('token');
        this.authService.activateUser(this.token).subscribe(
            {
                next: this.handleActivateResponse.bind(this),
                error: this.handleError.bind(this)
            }
        )
    }

    handleActivateResponse(response: any): void {
        var x = response;
        this.router
            .navigate(['/home'])
            .then(() => { })
            .catch(() => { });
        notiflix.Notify.success('User is now active', {
            position: 'right-top',
            timeout: 3000
        });
    }
    handleError(error: any): void {
        this.router
            .navigate(['/home'])
            .then(() => { })
            .catch(() => { });
        notiflix.Notify.failure(error.error.message + '- Operation unsuccessful', {
            position: 'right-top',
            timeout: 3000
        });
    }
}
