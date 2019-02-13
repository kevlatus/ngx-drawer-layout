import {Directive, HostListener} from '@angular/core';

import {DrawerService} from '../services/drawer.service';

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
