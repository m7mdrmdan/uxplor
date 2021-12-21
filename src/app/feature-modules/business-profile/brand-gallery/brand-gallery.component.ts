import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-gallery',
  templateUrl: './brand-gallery.component.html',
  styleUrls: ['./brand-gallery.component.scss']
})
export class BrandGalleryComponent implements OnInit {

  @Input() images:any[];
  @Input() link:string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    window.open(this.link);
  }

}
