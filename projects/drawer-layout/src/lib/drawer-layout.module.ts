import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { DEFAULT_CONFIG, DrawerConfig, startDrawerConfig, endDrawerConfig } from './config';
import { DrawerLayoutComponent } from './components/drawer-layout/drawer-layout.component';
import { DrawerItemComponent } from './components/drawer-item/drawer-item.component';
import { DrawerNavListComponent } from './components/drawer-nav-list/drawer-nav-list.component';
import { DrawerToggleButtonComponent } from './components/drawer-toggle-button/drawer-toggle-button.component';
import { DrawerToggleDirective } from './directives/drawer-toggle.directive';
import { DrawerService } from './services/drawer.service';
import { DrawerContentDirective } from './directives/drawer-content.directive';
import { DrawerAppContentDirective } from './directives/drawer-app-content.directive';
import { DrawerAppHeaderDirective } from './directives/drawer-app-header.directive';
import { EndDrawerContentDirective } from './directives/end-drawer-content.directive';

@NgModule({
  declarations: [
    DrawerLayoutComponent,
    DrawerItemComponent,
    DrawerNavListComponent,
    DrawerToggleButtonComponent,
    DrawerToggleDirective,
    DrawerContentDirective,
    DrawerAppContentDirective,
    DrawerAppHeaderDirective,
    EndDrawerContentDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    DrawerAppHeaderDirective,
    DrawerAppContentDirective,
    DrawerContentDirective,
    DrawerLayoutComponent,
    DrawerItemComponent,
    DrawerNavListComponent,
    DrawerToggleButtonComponent,
    DrawerToggleDirective,
  ]
})
export class DrawerLayoutModule {
  static forRoot(startConfig?: DrawerConfig, endConfig?: DrawerConfig): ModuleWithProviders {
    return {
      ngModule: DrawerLayoutModule,
      providers: [
        {
          provide: startDrawerConfig,
          useValue: !startConfig
            ? DEFAULT_CONFIG
            : {
              initialDisabled: startConfig.initialDisabled === undefined
                ? DEFAULT_CONFIG.initialDisabled
                : startConfig.initialDisabled,
              initialOpen: startConfig.initialOpen === undefined
                ? DEFAULT_CONFIG.initialOpen
                : startConfig.initialOpen,
            },
        },
        {
          provide: endDrawerConfig,
          useValue: !endConfig
          ? DEFAULT_CONFIG
          : {
            initialDisabled: endConfig.initialDisabled === undefined
              ? DEFAULT_CONFIG.initialDisabled
              : endConfig.initialDisabled,
            initialOpen: endConfig.initialOpen === undefined
              ? DEFAULT_CONFIG.initialOpen
              : endConfig.initialOpen,
          },
        },
        DrawerService,
      ]
    };
  }
}
