import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  
  { path: 'imprint' , component: ImprintComponent},
  { path: '', component: LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
