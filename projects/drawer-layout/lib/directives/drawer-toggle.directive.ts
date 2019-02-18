import {Directive, HostListener} from '@angular/core';

import {DrawerService} from '../services/drawer.service';

/**
 * Directive, which listens for click events on the host element. If a click event fires,
 * the opened state of the drawer is toggled.
 */
@Directive({
  selector: '[ngxDrawerToggle]'
})
export class DrawerToggleDirective {
  constructor(public drawer: DrawerService) {
  }

  @HostListener('click')
  onClick() {
    this.drawer.toggle();
  }
}
