import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DrawerService } from './drawer.service';

@Directive({
  selector: '[ngxEndDrawerContent]'
})
export class EndDrawerContentDirective implements OnChanges {
  @Input() public drawerMode: 'over' | 'side';

  constructor(private drawer: DrawerService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.drawerMode) {
      this.drawer.end.setMode(changes.drawerMode.currentValue);
    }
  }
}
