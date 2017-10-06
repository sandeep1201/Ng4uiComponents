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
  title: string;
  private _initWinHeight:number =0;
  constructor() {
    this.name = 'Angular2'
  }
  ngOnInit() {
    this.title = 'app works!';
  }
}