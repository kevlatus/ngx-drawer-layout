import {Component} from '@angular/core';
import {DrawerService} from 'drawer-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public drawer: DrawerService) {
  }

  onDisable() {
    this.drawer.disable();
  }
}
