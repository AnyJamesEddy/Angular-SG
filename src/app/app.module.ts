import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './components/sections/section1-component/section1.component';
import { Chapter1Component } from './components/sections/section1-component/chapters/chapter1-component/chapter1_1.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableofcontentComponent } from './components/dashboard/tableofcontext/tableofcontent.component';
import { CodepagerenderComponent } from './codepagerender/codepagerender.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Chapter1Component,
    DashboardComponent,
    TableofcontentComponent,
    CodepagerenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
