import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss']
})
export class DrawerItemComponent implements OnInit {
  @Input() public active = false;
  @Input() public icon: string;
  @Input() public text: string;

  constructor() {
  }

  ngOnInit() {
  }
}
