import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
    tabItems = ['Home', 'Health & Nutrition', 'Recipes', 'Fitness', 'Lifestyle', 'Supplements'];
    selectedMasterTab: string | null = 'Home';
    listCardData: any[] = [];
    constructor(private router: Router) {}

    ngOnInit(){
        this.listCardData = [
            {
                imgUrl: '../../../../assets/images/blog-list-1.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
            {
                imgUrl: '../../../../assets/images/blog-list-2.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
            {
                imgUrl: '../../../../assets/images/blog-list-3.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
            {
                imgUrl: '../../../../assets/images/blog-list-4.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
            {
                imgUrl: '../../../../assets/images/blog-list-5.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
            {
                imgUrl: '../../../../assets/images/blog-list-5.png',
                title: '5 Simple yoga poses for a Beggineer',
                description: 'Discover how yoga can improve your sleep quality with these easy folllow poses. Open now and read come on.',
                tag: 'Fitness'
            },
        ];
    }

    navigateToBlogDetail(){
        this.router
        .navigate(['/blogDetail'])
        .then(() => { })
        .catch(() => { });
    }
}
