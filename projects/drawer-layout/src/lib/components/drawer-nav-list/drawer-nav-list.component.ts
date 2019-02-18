import {Component, Input} from '@angular/core';

import {DrawerNavItem} from '../../models/drawer-nav';

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
  @Input() public heading: string;
  @Input() public items: DrawerNavItem[] = [];
}
