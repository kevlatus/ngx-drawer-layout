import { Component } from '@angular/core';
import { DrawerService } from 'ngx-drawer-layout';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  private fEndMode: 'over' | 'side' = 'over';

  get endMode() {
    return this.fEndMode;
  }

  set endMode(v) {
    this.fEndMode = v;
    console.log(v);
    this.drawer.end.setMode(v);
  }

  constructor(public drawer: DrawerService) {
  }
}
