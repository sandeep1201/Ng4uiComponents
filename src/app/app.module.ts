import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tabs } from './shared/tabs/tabs.component';
import { Tab  } from './shared/tab/tab.component';
import { TabsImplementationComponent } from './tabs-implementation/tabs-implementation.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'tabs',
        component: TabsImplementationComponent
      }
    ]),
    HttpModule
  ],
  declarations: [
    AppComponent,
    Tabs,
    Tab,
    TabsImplementationComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
