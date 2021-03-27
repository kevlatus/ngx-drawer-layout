import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { take, tap, filter } from 'rxjs/operators';

import { drawerPositions } from '../drawer.models';
import { DrawerService, DrawerServiceImpl } from '../drawer.service';

/**
 * Component, which allows for rendering a typical Material Design drawer layout.
 * It is supposed to be used as the top most component of your applications DOM tree, because
 * it takes up the whole window space.
 * In order to manipulate the state of this layout and the corresponding drawer use
 * {@link DrawerServiceImpl}.
 */
@Component({
  selector: 'ngx-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss'],
  providers: [
    {
      provide: DrawerService,
      useClass: DrawerServiceImpl,
    },
  ],
})
export class DrawerLayoutComponent implements OnInit {
  @ViewChild('header', { static: true })
  private headerElement: ElementRef<HTMLDivElement>;

  contentHeight = '100%';

  /**
   * {@link MatDrawerContainer.autosize}
   */
  @Input() public autosize: boolean;

  /**
   * {@link MatDrawer.autoFocus}
   */
  @Input() public drawerAutoFocus: boolean;

  /**
   * {@link MatDrawerContainer.hasBackdrop}
   */
  @Input() public hasBackdrop: boolean;

  /**
   * {@link MatDrawerContainer.backdropClick}
   */
  @Output() public backdropClicked = new EventEmitter<void>();

  constructor(public service: DrawerService) {}

  onBackdropClick() {
    this.backdropClicked.emit();

    for (const position of drawerPositions) {
      const drawer = this.service.getDrawer(position);
      if (!!drawer) {
        drawer.matMode$
          .pipe(
            take(1),
            filter((mode) => mode === 'over' || mode === 'push'),
            tap(() => drawer.close())
          )
          .subscribe();
      }
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.headerElement) {
        const height = this.headerElement.nativeElement.offsetHeight;
        this.contentHeight = `calc(100% - ${height}px)`;
      }
    });
  }
}
