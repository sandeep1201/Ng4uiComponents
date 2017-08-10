import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>
 <button (click) = "toggleElement()">Toggle Parent from Child</button>
</p>`
})
export class ChildComponent implements OnInit {
  @Output() elementToggled = new EventEmitter;

  elementShow: boolean = false;

  constructor() {
  }
  toggleElement() {
    this.elementShow = !this.elementShow;
    this.elementToggled.emit(this.elementShow);
    }

  ngOnInit() {}

}
