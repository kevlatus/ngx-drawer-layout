import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DrawerService } from 'ngx-drawer-layout';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  openOnEnable = true;

  constructor(public drawer: DrawerService) {
  }

  toggleDrawerState($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.drawer.disable();
    } else {
      this.drawer.enable(this.openOnEnable);
    }
  }

}
