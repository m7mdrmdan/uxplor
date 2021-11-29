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



  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    event.preventDefault();

  }

}
