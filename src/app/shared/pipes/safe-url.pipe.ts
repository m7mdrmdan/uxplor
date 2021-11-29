import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})

export class SafeUrlPipe implements PipeTransform {

  constructor(private urlSanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    return this.urlSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

