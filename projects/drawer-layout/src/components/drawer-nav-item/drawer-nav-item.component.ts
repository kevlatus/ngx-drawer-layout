import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-drawer-nav-item',
  templateUrl: './drawer-nav-item.component.html',
  styleUrls: ['./drawer-nav-item.component.scss']
})
export class DrawerNavItemComponent implements OnInit {
  @Input() public title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
