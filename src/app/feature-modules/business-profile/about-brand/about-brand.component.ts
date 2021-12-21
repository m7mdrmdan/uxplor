import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-brand',
  templateUrl: './about-brand.component.html',
  styleUrls: ['./about-brand.component.scss']
})
export class AboutBrandComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
