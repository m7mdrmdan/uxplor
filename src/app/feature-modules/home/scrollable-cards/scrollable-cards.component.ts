import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-cards',
  templateUrl: './scrollable-cards.component.html',
  styleUrls: ['./scrollable-cards.component.scss']
})
export class ScrollableCardsComponent implements OnInit {

  items = [
    {
      img: "assets/images/product1.png",
      title: "The Nine Meals Trial Pack",
      price: "EGP265.00",
      oldPrice: "EGP29.00"
    },
    {
      img: "assets/images/product2.png",
      title: "Beef Yumyums-513 Calories",
      price: "EGP32.00",
      oldPrice: "EGP29.00"
    },
    {
      img: "assets/images/product1.png",
      title: "The Nine Meals Trial Pack",
      price: "EGP265.00",
      oldPrice: "EGP29.00"
    },
    {
      img: "assets/images/product2.png",
      title: "Beef Yumyums-513 Calories",
      price: "EGP32.00",
      oldPrice: "EGP29.00"
    }
  ];
  
  texts: any = [{ heading: "The Nine Meals Trial Pack", paragraph: "EGP265.00 EGP288.00" }, { heading: "Beef Yumyums-513 Calories", paragraph: "EGP32.00" }, { heading: "The Nine Meals Trial Pack", paragraph: "EGP265.00 EGP288.00" }, { heading: "Beef Yumyums-513 Calories", paragraph: "EGP32.00" }]

  constructor() { }

  ngOnInit(): void {
  }

}
