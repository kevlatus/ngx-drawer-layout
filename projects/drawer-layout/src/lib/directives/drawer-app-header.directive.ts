import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[ngxDrawerAppHeader]'
})
export class DrawerAppHeaderDirective {
  @HostBinding('class.ngx-drawer-app-header') readonly class = true;

  constructor() {
  }
}
