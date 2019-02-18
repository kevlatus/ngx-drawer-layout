import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RouteHomeComponent} from './components/route-home/route-home.component';
import {RouteTestComponent} from './components/route-test/route-test.component';

const routes: Routes = [
  {path: '', component: RouteHomeComponent, pathMatch: 'full'},
  {path: 'test', component: RouteTestComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
