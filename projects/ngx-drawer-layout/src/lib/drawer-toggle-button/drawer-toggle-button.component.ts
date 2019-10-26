import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DrawerService } from '../drawer.service';

/**
 * Material icon button component, which can toggles the drawer opened state on click.
 * This serves as a helper component, since it implements usual Material Design practices for
 * drawer management.
 * Uses the menu ("hamburger") icon as default icon.
 */
@Component({
  selector: 'ngx-drawer-toggle-button',
  templateUrl: './drawer-toggle-button.component.html',
  styleUrls: ['./drawer-toggle-button.component.scss']
})
export class DrawerToggleButtonComponent {
  /**
   * Attribute, which allows for changing this button's icon. Valid values are all
   * available icons from the {@link MatIconRegistry}.
   * Defaults to "menu".
   */
  @Input() public icon = 'menu';

  /**
   * An observable, which fires, when the drawer is en-/disabled
   */
  isEnabled$: Observable<boolean>;

  constructor(drawer: DrawerService) {
    this.isEnabled$ = drawer.isDisabled$.pipe(
      map(v => !v),
    );
  }
}
