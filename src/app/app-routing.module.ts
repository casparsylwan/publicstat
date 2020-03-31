import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { BaseinfoComponent } from './components/pages/baseinfo/baseinfo.component';


const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'base', component: BaseinfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
