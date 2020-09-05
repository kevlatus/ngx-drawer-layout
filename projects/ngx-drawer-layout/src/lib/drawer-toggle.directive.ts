import { Directive, HostListener, Input } from '@angular/core';

import { DrawerPosition } from './drawer.models';
import { DrawerService } from './drawer.service';

/**
 * Directive, which listens for click events on the host element. If a click event fires,
 * the opened state of the drawer is toggled.
 */
@Directive({
  selector: '[ngxDrawerToggle]',
})
export class DrawerToggleDirective {
  @Input('ngxDrawerToggle') public position: DrawerPosition;

  constructor(public drawer: DrawerService) {}

  @HostListener('click')
  onClick() {
    this.drawer.getDrawer(this.position || 'start').toggle();
  }
}
