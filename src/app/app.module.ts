import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Guards */
import { UnauthGuardModule } from '@guards/unauth/unauth.guard.module';
import { AuthGuardModule } from '@guards/auth/auth.guard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Guards modules */
    UnauthGuardModule,
    AuthGuardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
