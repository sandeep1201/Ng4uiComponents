import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab {
  @Input('iconClass') iconClass: string;
  @Input('tabTitle') title: string;
  @Input() active = false;
}
