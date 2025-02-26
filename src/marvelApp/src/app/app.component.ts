import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    Device.getLanguageCode().then(r=>{
     let langcode= r.value;
     translate.setDefaultLang(langcode);
    });
   // let browserLang = translate.getBrowserLang()!;
   // translate.setDefaultLang(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
