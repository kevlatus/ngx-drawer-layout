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
