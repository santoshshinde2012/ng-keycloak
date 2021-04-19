import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
