import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstOneComponent } from './components/first-one/first-one.component';
import { SecondComponent } from './components/second/second.component';
import { AbstractKeypress } from './shared/abstract-keypress/abstract.keypress';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, FirstOneComponent, SecondComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
