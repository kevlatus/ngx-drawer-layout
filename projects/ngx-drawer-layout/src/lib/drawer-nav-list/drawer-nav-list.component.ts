import { Component, Input, ElementRef } from '@angular/core';
import { take } from 'rxjs/operators';

import { DrawerNavItem } from '../drawer-nav-item.model';
import { DrawerService } from '../drawer.service';

/**
 * This component renders all drawer items given by {@link items}.
 * It may have an optional heading given by {@link heading}.
 */
@Component({
  selector: 'ngx-drawer-nav-list',
  templateUrl: './drawer-nav-list.component.html',
  styleUrls: ['./drawer-nav-list.component.scss']
})
export class DrawerNavListComponent {
  private drawerType: 'start' | 'end' | undefined;

  @Input() public heading: string;
  @Input() public items: DrawerNavItem[] = [];

  private findDrawerType() {
    let it = this.elementRef.nativeElement;
    while (it) {
      if (it.hasAttribute('ngxdrawercontent')) {
        return 'start';
      } else if (it.hasAttribute('ngxenddrawercontent')) {
        return 'end';
      }

      it = it.parentElement;
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>, private drawer: DrawerService) {
    this.drawerType = this.findDrawerType();
  }

  onItemClicked() {
    if (!this.drawerType) {
      return;
    }

    const drawerController = this.drawerType === 'start' ? this.drawer.start : this.drawer.end;
    drawerController.mode$.pipe(take(1)).subscribe(mode => {
      if (mode === 'over') {
        drawerController.close();
      }
    });
  }
}
