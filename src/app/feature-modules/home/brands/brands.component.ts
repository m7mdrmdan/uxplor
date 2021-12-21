import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [
    {
      brandImg: 'assets/images/brand1.png',
      brandName: 'Jazeel'
    },
    {
      brandImg: 'assets/images/brand2.png',
      brandName: 'Petman'
    },
    {
      brandImg: 'assets/images/brand3.png',
      brandName: 'Khanfkhar'
    },
    {
      brandImg: 'assets/images/brand4.png',
      brandName: 'Up Fuse'
    },
    {
      brandImg: 'assets/images/brand5.png',
      brandName: 'Decobate'
    },
    {
      brandImg: 'assets/images/brand6.png',
      brandName: 'Knum'
    },
    {
      brandImg: 'assets/images/brand7.png',
      brandName: 'Doodle Factory'
    },
    {
      brandImg: 'assets/images/brand8.png',
      brandName: 'Khanfkhar'
    },
    {
      brandImg: 'assets/images/brand9.png',
      brandName: 'Maison Marie'
    },
    {
      brandImg: 'assets/images/brand10.png',
      brandName: 'Knum'
    },
    {
      brandImg: 'assets/images/brand11.png',
      brandName: 'Up Fuse'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}