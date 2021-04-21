import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    LandingRoutingModule
  ]
})
export class LandingModule { }
