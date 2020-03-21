import { NgModule, ModuleWithProviders, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { defaultDrawerLayoutConfig, DrawerLayoutConfig, PASSED_DRAWER_CONFIG, DRAWER_CONFIG } from './drawer.config';
import { DrawerService } from './drawer.service';
import { DrawerToggleDirective } from './drawer-toggle.directive';
import { DrawerLayoutComponent } from './drawer-layout/drawer-layout.component';
import { DrawerToggleButtonComponent } from './drawer-toggle-button/drawer-toggle-button.component';
import { mergeDeep } from './util';
import { EndDrawerContentDirective } from './end-drawer-content.directive';

export function windowFactory(platformId: {}) {
  if (isPlatformBrowser(platformId)) {
    return window;
  }
}

export function configFactory(passedConfig: DrawerLayoutConfig): DrawerLayoutConfig {
  if (!passedConfig) {
    return defaultDrawerLayoutConfig;
  }

  return mergeDeep(defaultDrawerLayoutConfig, passedConfig);
}

@NgModule({
  declarations: [
    DrawerToggleDirective,
    DrawerLayoutComponent,
    DrawerToggleButtonComponent,
    EndDrawerContentDirective,
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
    DrawerLayoutComponent,
    DrawerToggleButtonComponent,
    EndDrawerContentDirective,
  ],
  providers: [
    DrawerService,
    { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
  ]
})
export class DrawerLayoutModule {
  static forRoot(config: DrawerLayoutConfig = defaultDrawerLayoutConfig): ModuleWithProviders<DrawerLayoutModule> {
    return {
      ngModule: DrawerLayoutModule,
      providers: [
        { provide: PASSED_DRAWER_CONFIG, useValue: config },
        {
          provide: DRAWER_CONFIG,
          useFactory: configFactory,
          deps: [PASSED_DRAWER_CONFIG],
        },
      ]
    };
  }
}
