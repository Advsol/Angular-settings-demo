import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { AppConstantService } from 'src/asi-core/app-constants.service';
import { AuthorizationInterceptor } from 'src/asi-core/authorization-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppConstantService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthorizationInterceptor,
        multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
