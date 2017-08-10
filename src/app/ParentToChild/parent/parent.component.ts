import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child *ngFor = "let item of Items" [data] = "item"></app-child>
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
}
