import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    {path:'**', component: NotFoundComponent,title: '404'},
];
1