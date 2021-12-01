import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})
export class CustomerFeedbackComponent implements OnInit {
  slides=[
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Eleanor Pena",rating:4.5},
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Guy Hawkins",rating:4.5},
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Eleanor Pena",rating:4.5},
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Eleanor Pena",rating:4.5},
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Guy Hawkins",rating:4.5},
    {paragaraph:"Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",name:"Eleanor Pena",rating:4.5}
  ];
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
  constructor() { }

  ngOnInit(): void {
  }

}
