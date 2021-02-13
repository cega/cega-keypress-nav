import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstOneComponent } from './components/first-one/first-one.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {path: 'first', component: FirstOneComponent},
  {path: 'second', component: SecondComponent},
  {path: 'sub-mod', loadChildren: () => import('./module/example-mod/example-mod.module').then(m => m.ExampleModModule)},
  {path: '', redirectTo: 'first', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
