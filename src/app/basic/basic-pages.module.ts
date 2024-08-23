import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPagesRoutingModule } from './basic-pages-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StackComponent } from './components/stack/stack.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { SliderComponent } from './components/slider/slider.component';
import { MarcaComponent } from './components/marca/marca.component';
import { SliderMarcaComponent } from './components/slider-marca/slider-marca.component';
import { ProximamenteComponent } from './components/proximamente/proximamente.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    PortfolioPageComponent,
    SkillsComponent,
    StackComponent,
    HerramientasComponent,
    TrabajoComponent,
    SliderComponent,
    MarcaComponent,
    SliderMarcaComponent,
    ProximamenteComponent,

  ],
  imports: [
    CommonModule,
    BasicPagesRoutingModule
  ]
})
export class BasicPagesModule { }
