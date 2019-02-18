import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {DrawerService} from '../../services/drawer.service';

/**
 * Component, which allows for rendering a typical Material Design drawer layout.
 * It is supposed to be used as the top most component of your applications DOM tree, because
 * it takes up the whole window space.
 * In order to manipulate the state of this layout and the corresponding drawer use
 * {@link DrawerService}.
 */
@Component({
  selector: 'ngx-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss']
})
export class DrawerLayoutComponent {
  isOpened$: Observable<boolean>;

  constructor(drawer: DrawerService) {
    this.isOpened$ = drawer.isOpened$;
  }
}
