import { Directive, Input, OnInit } from "@angular/core";

import { DrawerController, DrawerControllerImpl } from "./drawer.controller";
import { DrawerMode, DrawerPosition } from "./drawer.models";
import { DrawerService, DrawerServiceImpl } from "./drawer.service";

@Directive({
  selector: "[ngxDrawer]",
  providers: [{ provide: DrawerController, useClass: DrawerControllerImpl }],
})
export class DrawerDirective implements OnInit {
  private get _position(): DrawerPosition {
    return this.position || "start";
  }

  @Input("ngxDrawer") public position: DrawerPosition;
  @Input() public initialDisabled: boolean;
  @Input() public initialOpen: boolean;
  @Input() public initialMode: DrawerMode = "responsive";

  constructor(private service: DrawerService, private ctrl: DrawerController) {}

  ngOnInit(): void {
    (this.ctrl as DrawerControllerImpl).init({
      disabled: this.initialDisabled !== undefined,
      open: this.initialOpen !== undefined,
      mode: this.initialMode,
    });

    (this.service as DrawerServiceImpl).registerDrawer(
      this._position,
      this.ctrl
    );
  }
}
