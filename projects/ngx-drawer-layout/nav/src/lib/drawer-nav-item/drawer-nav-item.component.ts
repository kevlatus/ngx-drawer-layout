import { Component, HostBinding, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * This interface defines the properties, which are needed by {@link DrawerNavListComponent} to render
 * drawer list items.
 */
export interface DrawerNavItem {
  /**
   * The icon to be used by the drawer item. Optional.
   */
  icon?: string;

  /**
   * The text to display inside the drawer item.
   */
  text: string;

  /**
   * Link to the Angular route, which is navigated to, when the drawer item is clicked.
   */
  href: string;

  /**
   * Whether the current route should exactly match {@link href} in order to apply _active_ styling.
   */
  exact?: boolean;
}

/**
 * This component is a Material-style navigation drawer item.
 * It consists of an optional icon and a descriptive text.
 * It can be used with {@link RouterLink} in order to work as a navigation item.
 * With [Material theming]{@link https://github.com/latusinski/ngx-drawer-layout#enabling-material-theming}
 * enabled, this component changes its style, when the class "active" is added. This might be useful, when
 * using [routerLink] with [routerLinkActive]="active".
 */
@Component({
  selector: 'ngx-drawer-nav-item',
  templateUrl: './drawer-nav-item.component.html',
  styleUrls: ['./drawer-nav-item.component.scss'],
})
export class DrawerNavItemComponent {
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

  /**
   * Setter for the "active" class of this drawer item.
   * @param v Use true, if the class "active" should be set.
   */
  public set active(v: boolean) {
    this.activeValue = v;
  }
}
