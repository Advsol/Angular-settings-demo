import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { AsiCoreModule } from '@advsol/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsiCoreModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/iPart/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
