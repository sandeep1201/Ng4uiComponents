import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `

<div *ngIf="elementShow">Show this div conditionally</div>
            <app-child 
             (elementToggled)="elementToggleHandler($event)"></app-child>
             <app-child2 ></app-child2>
             <app-data-display 
             *ngFor = "let item of Items" 
             [data] = "item"></app-data-display>
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
