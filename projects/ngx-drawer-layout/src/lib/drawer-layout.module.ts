import { NgModule, ModuleWithProviders, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { DrawerConfig, startDrawerConfig, endDrawerConfig } from './config';
import { DrawerService } from './drawer.service';
import { DrawerToggleDirective } from './drawer-toggle.directive';
import { DrawerItemComponent } from './drawer-item/drawer-item.component';
import { DrawerLayoutComponent } from './drawer-layout/drawer-layout.component';
import { DrawerToggleButtonComponent } from './drawer-toggle-button/drawer-toggle-button.component';
import { DrawerNavListComponent } from './drawer-nav-list/drawer-nav-list.component';

export function windowFactory(platformId: {}) {
  if (isPlatformBrowser(platformId)) {
    return window;
  }
}

@NgModule({
  declarations: [
    DrawerToggleDirective,
    DrawerItemComponent,
    DrawerLayoutComponent,
    DrawerToggleButtonComponent,
    DrawerNavListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [
    DrawerToggleDirective,
    DrawerItemComponent,
    DrawerLayoutComponent,
    DrawerToggleButtonComponent,
    DrawerNavListComponent,
  ],
  providers: [
    DrawerService,
    { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID]},
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
            ? { initialDisabled: false, initialOpen: true }
            : {
              initialDisabled: startConfig.initialDisabled === undefined
                ? false
                : startConfig.initialDisabled,
              initialOpen: startConfig.initialOpen === undefined
                ? true
                : startConfig.initialOpen,
            },
        },
        {
          provide: endDrawerConfig,
          useValue: !endConfig
            ? { initialDisabled: true, initialOpen: false }
            : {
              initialDisabled: endConfig.initialDisabled === undefined
                ? true
                : endConfig.initialDisabled,
              initialOpen: endConfig.initialOpen === undefined
                ? false
                : endConfig.initialOpen,
            },
        },
      ]
    };
  }
}
