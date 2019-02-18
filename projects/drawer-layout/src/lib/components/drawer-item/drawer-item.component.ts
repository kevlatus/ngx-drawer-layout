import {Component, HostBinding, Input} from '@angular/core';

/**
 * This component is a Material-style navigation drawer item.
 * It consists of an optional icon and a descriptive text.
 * It can be used with {@link RouterLink} in order to work as a navigation item.
 * With [Material theming]{@link https://github.com/latusinski/ngx-drawer-layout#enabling-material-theming}
 * enabled, this component changes its style, when the class "active" is added. This might be useful, when
 * using [routerLink] with [routerLinkActive]="active".
 */
@Component({
  selector: 'ngx-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
})
export class DrawerItemComponent {
  private activeValue = false;

  /**
   * Defines the icon, which is used for the drawer item. Optional.
   */
  @Input() public icon: string;
  /**
   * The text, which is displayed in the drawer item.
   */
  @Input() public text: string;

  /**
   * Defines whether this drawer item is currently active.
   * This changes the item's styling, if Material theming is enabled.
   */
  @HostBinding('class.active')
  @Input()
  public get active(): boolean {
    return this.activeValue !== false;
  }

  public set active(v: boolean) {
    this.activeValue = v;
  }
}
