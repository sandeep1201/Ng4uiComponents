import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  title: string;
  constructor() {
    this.name = 'Angular2'
  }
  ngOnInit() {
    this.title = 'app works!';
  }
}