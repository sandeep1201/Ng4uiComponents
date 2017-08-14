import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  minHeight: string;
  private _initWinHeight:number =0;
  constructor() {
    this.name = 'Angular2'
  }
  ngOnInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(event => this._resizeFn(event)
      );
    this._initWinHeight = window.innerHeight;
    this._resizeFn(null);
  }

  private _resizeFn(e) {
    debugger;
    let winHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `${winHeight}px`;

  }

  title = 'app works!';
}
