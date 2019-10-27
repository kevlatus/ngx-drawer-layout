import { Component, OnInit, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DrawerController } from 'ngx-drawer-layout';

@Component({
  selector: 'app-drawer-config-form',
  templateUrl: './drawer-config-form.component.html',
  styleUrls: ['./drawer-config-form.component.scss']
})
export class DrawerConfigFormComponent {
  openOnEnable = true;

  @Input() public drawer: DrawerController;

  constructor() { }

  toggleEnabled($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.drawer.disable();
    } else {
      this.drawer.enable(this.openOnEnable);
    }
  }
}
