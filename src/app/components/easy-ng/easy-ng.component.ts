import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easy-ng',
  templateUrl: './easy-ng.component.html',
  styleUrls: ['./easy-ng.component.scss']
})
export class EasyNgComponent {

  name:string="Eddy";
  b1Pressed:boolean=false;
  b2Pressed:boolean=true;

  constructor() { }

  onClick() {
    this.b1Pressed=!this.b1Pressed;
    this.b2Pressed=!this.b2Pressed;
  }
}
