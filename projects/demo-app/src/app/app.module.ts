import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerLayoutModule } from 'ngx-drawer-layout';
import { DrawerNavModule } from 'ngx-drawer-layout/nav';

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
    HttpClientModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    DrawerLayoutModule,
    DrawerNavModule,

    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ic-github.svg')
    );

    matIconRegistry.addSvgIcon(
      'npm',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ic-npm.svg')
    );
  }
}
