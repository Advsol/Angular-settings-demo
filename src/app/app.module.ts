import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
