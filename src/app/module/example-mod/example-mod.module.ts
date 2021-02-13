import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleModRoutingModule } from './example-mod-routing.module';
import { ExampleModComponent } from './example-mod.component';
import { ExampleLandingComponent } from './component/example-landing/example-landing.component';


@NgModule({
  declarations: [ExampleModComponent, ExampleLandingComponent],
  imports: [
    CommonModule,
    ExampleModRoutingModule
  ]
})
export class ExampleModModule { }
