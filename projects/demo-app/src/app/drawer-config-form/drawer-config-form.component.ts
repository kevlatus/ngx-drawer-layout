import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DrawerController, DrawerMode } from 'ngx-drawer-layout';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-drawer-config-form',
  templateUrl: './drawer-config-form.component.html',
  styleUrls: ['./drawer-config-form.component.scss'],
})
export class DrawerConfigFormComponent implements OnInit {
  openOnEnable = true;
  mode: DrawerMode;

  @Input() public drawer: DrawerController;

  ngOnInit(): void {
    this.drawer?.mode$
      .pipe(
        take(1),
        tap((mode) => (this.mode = mode))
      )
      .subscribe();
  }

  toggleEnabled($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.drawer.disable();
    } else {
      this.drawer.enable(this.openOnEnable);
    }
  }

  onModeChange(event: DrawerMode) {
    this.drawer?.setMode(event);
  }
}
