import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chapter1_1-component',
  templateUrl: './chapter1_1.component.html',
  styleUrls: ['./chapter1_1.component.scss']
})
export class Chapter1Component implements OnInit,OnDestroy{
  name: string = 'Eddy';
  b1Pressed: boolean = false;
  b2Pressed: boolean = true;
  b3Pressed: boolean = false;

  chapter:{id:number}={
    id:this.route.snapshot.params['id']
  };
  paramsSubscription:Subscription=this.route.params.subscribe(
    (params:Params) =>{
      this.chapter.id=params['id'];
    }
  );

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.chapter={
      id:this.route.snapshot.params['id']
    };
    this.paramsSubscription=this.route.params.subscribe(
      (params:Params) =>{
        this.chapter.id=params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
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

