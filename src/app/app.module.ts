import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tab  } from './shared/tab/tab.component';
import { Tabs  } from './shared/tabs/tabs.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tab'

      },
      {
        path: 'tab',
        component: Tab,
      },

    ]),
    HttpModule
  ],
  declarations: [
    AppComponent,
    Tabs,
    Tab,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
