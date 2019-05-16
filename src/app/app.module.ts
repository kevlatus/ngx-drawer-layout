import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';
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
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    DrawerLayoutModule.forRoot({initialOpen: true, initialDisabled: false}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
