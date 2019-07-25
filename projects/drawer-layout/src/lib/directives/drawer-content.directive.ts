import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[ngxDrawerContent]'
})
export class DrawerContentDirective {
  @HostBinding('class.ngx-drawer-content') readonly class = true;
}
