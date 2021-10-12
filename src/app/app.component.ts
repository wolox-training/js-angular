import { Component } from '@angular/core';
import { LANGUAGES } from '@constants/languages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly translateService: TranslateService
  ) {
    this.setDefaultLang()
  }

  private setDefaultLang() {
    this.translateService.addLangs(Object.values(LANGUAGES));
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(browserLang.match(/en|es/) ? browserLang : LANGUAGES.en);

  }
}
