import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleLandingComponent } from './component/example-landing/example-landing.component';

import { ExampleModComponent } from './example-mod.component';

const routes: Routes = [
  { path: 'landing', component: ExampleLandingComponent },
  { path: '', component: ExampleModComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleModRoutingModule { }
