import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>
 {{data.name}}
</p>`
})
export class ChildComponent implements OnInit {

  @Input() data: any;

  constructor() {
    debugger;
  }

  ngOnInit() {
    console.log(this.data);
  }

}
