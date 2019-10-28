import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerLayoutModule } from 'ngx-drawer-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DrawerConfigFormComponent } from './drawer-config-form/drawer-config-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerConfigFormComponent,
    FirstPageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    DrawerLayoutModule.forRoot({
      start: { initialOpen: true, initialDisabled: false },
      end: { initialDisabled: false }
    }),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
