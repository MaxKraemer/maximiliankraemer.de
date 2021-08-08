import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  
  { path: 'imprint' , component: ImprintComponent},
  { path: '', component: HeadlineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
