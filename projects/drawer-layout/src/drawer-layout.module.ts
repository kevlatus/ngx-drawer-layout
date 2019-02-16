import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';

import {DrawerLayoutComponent} from './components/drawer-layout/drawer-layout.component';
import {DrawerNavItemComponent} from './components/drawer-nav-item/drawer-nav-item.component';
import {DrawerToggleButtonComponent} from './components/drawer-toggle-button/drawer-toggle-button.component';
import {DrawerToggleDirective} from './directives/drawer-toggle.directive';
import {DrawerService} from './services/drawer.service';

@NgModule({
  declarations: [
    DrawerLayoutComponent,
    DrawerNavItemComponent,
    DrawerToggleButtonComponent,
    DrawerToggleDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    DrawerLayoutComponent,
    DrawerNavItemComponent,
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
