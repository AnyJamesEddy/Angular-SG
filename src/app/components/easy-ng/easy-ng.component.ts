import {Component} from '@angular/core';


@Component({
  selector: 'app-easy-ng',
  templateUrl: 'easy-ng.component.html',
  styleUrls: ['./easy-ng.component.scss']
})
export class EasyNgComponent {

  name: string = 'Eddy';
  b1Pressed: boolean = false;
  b2Pressed: boolean = true;
  b3Pressed: boolean = false;



  constructor() {
  }

  onClick1() {
    if (!this.b1Pressed) {
      this.b1Pressed = !this.b1Pressed;
      this.b2Pressed = !this.b2Pressed;
    }
    this.callTimer();
  }

  callTimer(){
    let counter = 5;
    let intervalId = setInterval(() => {
      counter = counter - 1;
      console.log(counter)
      if(counter === 0) {clearInterval(intervalId);
        if (!this.b2Pressed) {
          this.b1Pressed = !this.b1Pressed;
          this.b2Pressed = !this.b2Pressed;
          this.b3Pressed=false;
        }
      }
    }, 1000)
  }

  onClick2() {
    if (!this.b2Pressed) {
      this.b1Pressed = !this.b1Pressed;
      this.b2Pressed = !this.b2Pressed;
    }
  }

  onClick3() {
    this.b3Pressed=true;
    this.callTimer();
  }
}
