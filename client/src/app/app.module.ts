import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HttpModule } from "@angular/http";



@NgModule({
  imports:      [ BrowserModule , FormsModule , ReactiveFormsModule,HttpModule ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
