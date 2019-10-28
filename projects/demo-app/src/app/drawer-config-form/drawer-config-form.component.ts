import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() public canToggleMode = false;
  @Input() public mode: 'over' | 'side' = 'over';
  @Output() public modeChange = new EventEmitter<'over' | 'side'>();

  constructor() { }

  toggleEnabled($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.drawer.disable();
    } else {
      this.drawer.enable(this.openOnEnable);
    }
  }

  onModeChange(event: 'over' | 'side') {
    this.modeChange.emit(event);
  }
}
