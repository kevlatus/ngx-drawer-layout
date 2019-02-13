import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {DrawerService} from '../../services/drawer.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-drawer-toggle-button',
  templateUrl: './drawer-toggle-button.component.html',
  styleUrls: ['./drawer-toggle-button.component.scss']
})
export class DrawerToggleButtonComponent implements OnInit {
  isEnabled$: Observable<boolean>;

  constructor(drawer: DrawerService) {
    this.isEnabled$ = drawer.isDisabled$.pipe(
      map(v => !v),
    );
  }

  ngOnInit() {
  }
}
