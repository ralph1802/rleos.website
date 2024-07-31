import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './basic/pages/about-page/about-page.component';
import { ContactPageComponent } from './basic/pages/contact-page/contact-page.component';
import { HomePageComponent } from './basic/pages/home-page/home-page.component';
import { ServicesPageComponent } from './basic/pages/services-page/services-page.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutPageComponent,
  },

  {
    path: 'contact',
    component: ContactPageComponent,
  },

  {
    path: 'home',
    component: HomePageComponent,
  },

  {
    path: 'services',
    component: ServicesPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
