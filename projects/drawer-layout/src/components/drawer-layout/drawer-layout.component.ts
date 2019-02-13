import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DrawerService} from '../../services/drawer.service';

@Component({
  selector: 'ngx-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss']
})
export class DrawerLayoutComponent implements OnInit {
  isOpened$: Observable<boolean>;

  constructor(drawer: DrawerService) {
    this.isOpened$ = drawer.isOpened$;
  }

  ngOnInit() {
  }
}
