import { MatDrawerMode } from "@angular/material/sidenav";

export type DrawerMode = MatDrawerMode | "responsive";

export { MatDrawerMode } from "@angular/material/sidenav";

export type DrawerPosition = "start" | "end";

export const drawerPositions: readonly DrawerPosition[] = [
  "start",
  "end",
] as const;
