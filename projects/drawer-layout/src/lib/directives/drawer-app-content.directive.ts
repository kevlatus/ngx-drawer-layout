import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[ngxDrawerAppContent]'
})
export class DrawerAppContentDirective {
  @HostBinding('class.ngx-app-content') readonly class = true;

  constructor() {
  }
}
