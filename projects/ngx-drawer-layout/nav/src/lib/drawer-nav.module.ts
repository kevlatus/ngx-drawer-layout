import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { DrawerNavItemComponent } from './drawer-nav-item/drawer-nav-item.component';
import { DrawerNavListComponent } from './drawer-nav-list/drawer-nav-list.component';

@NgModule({
  declarations: [
    DrawerNavItemComponent, //
    DrawerNavListComponent,
  ],
  imports: [
    CommonModule, //
    DrawerLayoutModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    DrawerNavItemComponent, //
    DrawerNavListComponent,
  ],
})
export class DrawerNavModule {}
