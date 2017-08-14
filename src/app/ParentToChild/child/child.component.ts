import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { CounterService } from '../../services/counter.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  providers: [CounterService]
})
export class ChildComponent implements OnInit, OnDestroy {
  @Output() elementToggled = new EventEmitter;

  elementShow: boolean = false;
  countSub: Subscription;

  constructor( private counterService: CounterService) {
  }
  toggleElement() {
    this.elementShow = !this.elementShow;
    this.elementToggled.emit(this.elementShow);
    }

  ngOnInit() {
    this.countSub = this.counterService.count$.subscribe(
      value => {
        console.log('global counter value changed: ', value);
      }
    )
  }
  ngOnDestroy() {
    this.countSub.unsubscribe();
  }

}
