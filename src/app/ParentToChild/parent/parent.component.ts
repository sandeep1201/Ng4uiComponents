import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `

<div *ngIf="elementShow">Show this div conditionally</div>
            <app-child 
             (elementToggled)="elementToggleHandler($event)"></app-child>
             <app-child2 
             *ngFor = "let item of Items" 
             [data] = "item"></app-child2>
`
})
export class ParentComponent {

  public Items = [
    { name: 'IL' },
    { name : 'OH' },
    { name: 'MI' },
    { name: 'MA' },
    { name: 'Maryland' }
  ];
  elementShow:boolean;

  elementToggleHandler(e: boolean) {
      this.elementShow = e;

  }

}
