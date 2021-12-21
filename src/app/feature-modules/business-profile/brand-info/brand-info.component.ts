import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-info',
  templateUrl: './brand-info.component.html',
  styleUrls: ['./brand-info.component.scss']
})
export class BrandInfoComponent implements OnInit {

  @Input() brandInfo:any;
  
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
