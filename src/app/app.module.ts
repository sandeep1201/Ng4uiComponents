import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tab  } from './shared/tab/tab.component';
import { Tabs  } from './shared/tabs/tabs.component';
import { ParentComponent } from './ParentToChild/parent/parent.component';
import { ChildComponent } from './ParentToChild/child/child.component';
import { RouterModule } from "@angular/router";
import { TabsimplementationComponent } from './shared/tabsimplementation/tabsimplementation.component';
import { Child2Component } from './ParentToChild/child2/child2.component';
import { CounterService } from "./services/counter.service";
import { DataDisplayComponent } from './ParentToChild/data-display/data-display.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch:'full',
        component: TabsimplementationComponent,
      },
      {
        path: 'home',
        pathMatch:'full',
        component: HomeComponent,
      },
      {
        path: 'tab',
        component: TabsimplementationComponent,
      },
      {
        path: 'parent',
        pathMatch:'full',
        component: ParentComponent,
      },

    ], {enableTracing: true}),
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Tabs,
    Tab,
    ParentComponent,
    ChildComponent,
    TabsimplementationComponent,
    Child2Component,
    DataDisplayComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
