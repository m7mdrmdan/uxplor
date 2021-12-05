import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-petman',
  templateUrl: './about-petman.component.html',
  styleUrls: ['./about-petman.component.scss']
})
export class AboutPetmanComponent implements OnInit {


  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
