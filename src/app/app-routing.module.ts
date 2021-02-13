import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstOneComponent } from './components/first-one.component';

const routes: Routes = [
  {path: 'first', component: FirstOneComponent},
  {path: '', redirectTo: 'first', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
