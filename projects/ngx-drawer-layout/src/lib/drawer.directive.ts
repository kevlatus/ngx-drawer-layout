import { Directive, Input, OnInit } from '@angular/core';

import { DrawerMode, DrawerPosition } from './drawer.models';
import { DrawerService } from './drawer.service';

@Directive({
  selector: '[ngxDrawer]',
  exportAs: 'ngxDrawer',
})
export class DrawerDirective implements OnInit {
  private _position: DrawerPosition;

  @Input('ngxDrawer')
  public get position(): DrawerPosition {
    return this._position || 'start';
  }

  public set position(val: DrawerPosition) {
    this._position = val;
  }

  @Input() public initialDisabled: boolean = false;
  @Input() public initialOpen: boolean = false;
  @Input() public initialMode: DrawerMode = 'responsive';

  constructor(public readonly service: DrawerService) {}

  ngOnInit(): void {
    if (this.initialDisabled === false) {
      this.service.getDrawer(this.position).enable();
    } else {
      this.service.getDrawer(this.position).disable();
    }

    if (this.initialOpen === false) {
      this.service.getDrawer(this.position).close();
    } else {
      this.service.getDrawer(this.position).open();
    }

    this.service.getDrawer(this.position).setMode(this.initialMode);
  }
}
