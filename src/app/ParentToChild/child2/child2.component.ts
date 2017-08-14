import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-child2',
  templateUrl:'./child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [CounterService]
})
export class Child2Component implements OnInit {

   countSub: Subscription;

  constructor( private counterService: CounterService) { }

  ngOnInit() {
     this.countSub = this.counterService.count$.subscribe(
      value => {
        console.log('global counter value changed: ', value);
      }
    )
  }

}
