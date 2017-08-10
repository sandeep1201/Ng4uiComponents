import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template:`<p>{{data.name}}</p>`,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Input() data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
