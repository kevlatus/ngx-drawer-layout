import {Component} from '@angular/core';
import {DrawerNavItem, DrawerService} from 'drawer-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: DrawerNavItem[] = [
    {icon: 'home', text: 'Home', exact: true, href: '/'},
    {text: 'Test', href: '/test'}
  ];

  constructor(public drawer: DrawerService) {
  }

  onDisable() {
    this.drawer.disable();
  }
}
