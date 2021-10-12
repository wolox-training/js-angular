import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/* Internationalization */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGES } from '@constants/languages';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
export class I18nModule {
  static forRoot(): ModuleWithProviders<TranslateModule> {
    return TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  }
  static forChild(): ModuleWithProviders<TranslateModule> {
    return TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  }
}
