import { Directive, Input, HostListener } from '@angular/core';
import { mifilter } from 'src/config/mi-config';
import { LiferayService } from 'src/app/core/services/liferay.service';

@Directive({
  selector: '[appLiferay]'
})
export class LiferayDirective {
  @Input('appLiferay') url: string;
  @Input('content') content: string;

  constructor(private liferayService: LiferayService) { }

  @HostListener('click', ['$event'])
  public onClick(event: Event) {
    event.preventDefault();
    if(this.url) {
      this.goToLiferay (this.url);
    }
  }

  goToLiferay(url) {
    this.liferayService.redirect(url,this.content);
  }
}
