import {Component} from '@angular/core';
import {DrawerService} from 'drawer-layout';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.scss']
})
export class RouteHomeComponent {
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
