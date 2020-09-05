import { NgModule, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";

import { DrawerToggleDirective } from "./drawer-toggle.directive";
import { DrawerLayoutComponent } from "./drawer-layout/drawer-layout.component";
import { DrawerDirective } from "./drawer.directive";

export function windowFactory(platformId: {}) {
  if (isPlatformBrowser(platformId)) {
    return window;
  }
}

@NgModule({
  declarations: [DrawerToggleDirective, DrawerLayoutComponent, DrawerDirective],
  imports: [CommonModule, MatSidenavModule, RouterModule],
  exports: [DrawerToggleDirective, DrawerLayoutComponent, DrawerDirective],
  providers: [
    { provide: "window", useFactory: windowFactory, deps: [PLATFORM_ID] },
  ],
})
export class DrawerLayoutModule {}
