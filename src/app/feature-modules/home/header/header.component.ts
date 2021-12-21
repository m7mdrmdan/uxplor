import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
logoimg="assets/images/logo.png"
  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(){
    this.translate.use(this.translate.currentLang == 'en'?'ar':'en');
  }

}
