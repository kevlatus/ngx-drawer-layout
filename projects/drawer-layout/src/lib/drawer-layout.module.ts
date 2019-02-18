import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {DrawerLayoutComponent} from './components/drawer-layout/drawer-layout.component';
import {DrawerItemComponent} from './components/drawer-item/drawer-item.component';
import {DrawerNavListComponent} from './components/drawer-nav-list/drawer-nav-list.component';
import {DrawerToggleButtonComponent} from './components/drawer-toggle-button/drawer-toggle-button.component';
import {DrawerToggleDirective} from './directives/drawer-toggle.directive';
import {DrawerService} from './services/drawer.service';

@NgModule({
  declarations: [
    DrawerLayoutComponent,
    DrawerItemComponent,
    DrawerNavListComponent,
    DrawerToggleButtonComponent,
    DrawerToggleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    DrawerLayoutComponent,
    DrawerItemComponent,
    DrawerNavListComponent,
    DrawerToggleButtonComponent,
    DrawerToggleDirective,
  ]
})
export class DrawerLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DrawerLayoutModule,
      providers: [
        DrawerService
      ]
    };
  }
}
