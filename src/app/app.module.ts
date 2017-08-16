import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AppRoutingModule } from './app-routing.module';
import { CredentialInterceptorProvider, ErrorInterceptorProvider } from './interceptors';
import { AppComponent } from './app.component';
import { PersonService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    // Interceptors
    CredentialInterceptorProvider,
    ErrorInterceptorProvider,
    // Services
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
