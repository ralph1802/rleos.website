import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';
import { HomePageComponent } from './basic/pages/home-page/home-page.component';
import { ServicesPageComponent } from './basic/pages/services-page/services-page.component';
import { AboutPageComponent } from './basic/pages/about-page/about-page.component';
import { ContactPageComponent } from './basic/pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    HomePageComponent,
    ServicesPageComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
