import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
})
export class DrawerItemComponent implements OnInit {
  private activeValue = false;

  @Input() public icon: string;
  @Input() public text: string;

  @HostBinding('class.active')
  @Input()
  public get active(): boolean {
    return this.activeValue !== false;
  }

  public set active(v: boolean) {
    this.activeValue = v;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
