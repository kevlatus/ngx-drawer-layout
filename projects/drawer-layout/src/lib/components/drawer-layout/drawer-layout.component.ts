import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
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
export class DrawerLayoutComponent implements OnInit {
  /**
   * {@link MatDrawerContainer.autosize}
   */
  @Input() public autosize: boolean;

  /**
   * {@link MatDrawer.autoFocus}
   */
  @Input() public drawerAutoFocus: boolean;

  /**
   * {@link MatDrawer.position}
   */
  @Input() public drawerPosition: 'start' | 'end';

  /**
   * {@link MatDrawerContainer.hasBackdrop}
   */
  @Input() public hasBackdrop: boolean;

  /**
   * {@link MatDrawerContainer.backdropClick}
   */
  @Output() public backdropClicked = new EventEmitter<void>();

  @ViewChild('header') private headerElement: ElementRef<HTMLDivElement>;

  isOpened$: Observable<boolean>;
  contentHeight = '100vh';
  mode: 'over' | 'side' = 'over';

  constructor(public drawer: DrawerService, mediaObserver: MediaObserver) {
    this.isOpened$ = drawer.isOpened$;
    mediaObserver.asObservable().subscribe(() => {
      this.mode = mediaObserver.isActive('gt-sm') ? 'side' : 'over';
    });
  }

  onBackdropClick() {
    this.backdropClicked.emit();
    this.drawer.close();
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.headerElement) {
        const height = this.headerElement.nativeElement.offsetHeight;
        this.contentHeight = `calc(100vh - ${height}px)`;
      }
    });
  }
}
