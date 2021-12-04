import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.scss']
})
export class CustomerFeedbackComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 20,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  slides=[
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    },
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    },
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    },
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    },
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    },
    {
      paragaraph: "Sapien auctor enim faucibus sit. Mi sed id pharetra neque, ipsum ac purus. Pulvinar pellentesque vel nec nulla adipiscing. Ipsum in sit amet adipiscing velit sed cursus elit, quam. Ac purus egestas cras metus est tortor, viverra risus. Sit proin nam mi quis.",
      name:"Eleanor Pena",
      rating:4.5
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}