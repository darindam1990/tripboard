import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { CardComponent } from './components/ta-card/ta-card.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
    ],
  declarations: [ AppComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
