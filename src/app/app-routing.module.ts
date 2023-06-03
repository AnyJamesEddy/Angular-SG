import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Section1Component} from './components/sections/section1-component/section1.component';
import {
  Chapter1Component
} from './components/sections/section1-component/chapters/chapter1-component/chapter1_1.component';
import {CodepagerenderComponent} from './codepagerender/codepagerender.component';

const appRoutes: Routes = [
  {
    path: 'section/1', component: Section1Component, children: [
      {path: ':chapter/1', component: Chapter1Component},
    ]
  },
  {
    path: 'section/2', component:CodepagerenderComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
