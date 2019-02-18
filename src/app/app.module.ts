import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {DrawerLayoutModule} from 'drawer-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouteHomeComponent} from './components/route-home/route-home.component';
import {RouteTestComponent} from './components/route-test/route-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteHomeComponent,
    RouteTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DrawerLayoutModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
