import { Component, Input, Optional } from '@angular/core';
import { take } from 'rxjs/operators';
import { DrawerDirective, DrawerService } from 'ngx-drawer-layout';

import { DrawerNavItem } from '../drawer-nav-item/drawer-nav-item.component';

/**
 * This component renders all drawer items given by {@link items}.
 * It may have an optional heading given by {@link heading}.
 */
@Component({
  selector: 'ngx-drawer-nav-list',
  templateUrl: './drawer-nav-list.component.html',
  styleUrls: ['./drawer-nav-list.component.scss'],
})
export class DrawerNavListComponent {
  @Input() public heading: string;
  @Input() public items: DrawerNavItem[] = [];

  constructor(
    private service: DrawerService,
    @Optional() private drawer?: DrawerDirective
  ) {}

  onItemClicked() {
    const drawer = this.service.getDrawer(this.drawer?.position || 'start');
    drawer.mode$.pipe(take(1)).subscribe((mode) => {
      if (mode === 'over') {
        drawer.close();
      }
    });
  }
}
