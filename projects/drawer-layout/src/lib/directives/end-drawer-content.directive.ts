import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngxEndDrawerContent]'
})
export class EndDrawerContentDirective {
  @HostBinding('class.ngx-end-drawer-content') readonly class = true;
}
