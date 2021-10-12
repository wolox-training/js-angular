import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Guards */
import { UnauthGuardModule } from '@guards/unauth/unauth.guard.module';
import { AuthGuardModule } from '@guards/auth/auth.guard.module';

/** internationalization */
import { I18nModule } from '@i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Guards modules */
    UnauthGuardModule,
    AuthGuardModule,
    /* Internationalization */
    I18nModule,
    I18nModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
