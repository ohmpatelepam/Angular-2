import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddarticleComponent} from './addarticle/addarticle.component';
import {BodyComponent} from './body/body.component';

const routes: Routes = [{path: 'addarticle' , component: AddarticleComponent}, {path:'bodycomponent/:src', component: BodyComponent},
{ path: '',  redirectTo: 'bodycomponent/all', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
