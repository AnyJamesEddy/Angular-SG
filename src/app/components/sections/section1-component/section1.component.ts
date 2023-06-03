import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-section1-component',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit, OnDestroy {

  section:{id:number}={
    id:this.route.snapshot.params['id']
  };
  paramsSubscription:Subscription=this.route.params.subscribe(
    (params:Params) =>{
      this.section.id=params['id'];
    }
  );

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.section={
      id:this.route.snapshot.params['id']
    };
    this.paramsSubscription=this.route.params.subscribe(
      (params:Params) =>{
        this.section.id=params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
