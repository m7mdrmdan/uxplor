import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {

  @Input() cardStyle = "card-body-between"; //  Option to change Card style.
  @Input() cardSize = "card-md"; //  Option to change Card size.
  // @Input() content:any;
  @Input() lazyLoad: boolean;

slides= [
  // "assets/images/product2.png",
  // "assets/images/product1.png"
    
    {source:"assets/images/product1.png",heading:"The Nine Meals Trial Pack",paragraph:"EGP265.00 EGP288.00"},
    {source:"assets/images/product2.png",heading:"Beef Yumyums-513 Calories",paragraph:"EGP32.00"},
    {source:"assets/images/product1.png",heading:"The Nine Meals Trial Pack",paragraph:"EGP265.00 EGP288.00"},
    {source:"assets/images/product2.png",heading:"Beef Yumyums-513 Calories",paragraph:"EGP32.00"},

  ];
  texts:any=[{heading:"The Nine Meals Trial Pack",paragraph:"EGP265.00 EGP288.00"},{heading:"Beef Yumyums-513 Calories",paragraph:"EGP32.00"},{heading:"The Nine Meals Trial Pack",paragraph:"EGP265.00 EGP288.00"},{heading:"Beef Yumyums-513 Calories",paragraph:"EGP32.00"}]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    event.preventDefault();

  }

}
