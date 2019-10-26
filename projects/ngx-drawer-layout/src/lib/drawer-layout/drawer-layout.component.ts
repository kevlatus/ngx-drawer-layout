import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { DrawerService } from '../drawer.service';

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
  @ViewChild('header', { static: true })
  private headerElement: ElementRef<HTMLDivElement>;

  contentHeight = '100vh';

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

  constructor(public drawer: DrawerService) {
  }

  onBackdropClick() {
    this.backdropClicked.emit();
    this.drawer.close();
    this.drawer.end.close();
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
