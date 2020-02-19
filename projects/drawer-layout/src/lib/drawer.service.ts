import { Inject, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { DRAWER_CONFIG, DrawerLayoutConfig } from './drawer.config';
import { DrawerController } from './drawer.controller';

/**
 * Service for controlling the state of the {@link DrawerLayoutComponent} used by
 * this application.
 */
@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  public readonly start: DrawerController;
  public readonly end: DrawerController;

  constructor(
    @Inject(DRAWER_CONFIG) config: DrawerLayoutConfig,
    @Inject('window') window: any,
    eventManager: EventManager
  ) {
    this.start = new DrawerController(window, config.start, eventManager);
    this.end = new DrawerController(window, config.end, eventManager);

    this.isOpened$ = this.start.isOpened$;
    this.isDisabled$ = this.start.isDisabled$;
  }

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public readonly isOpened$: Observable<boolean>;

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public readonly isDisabled$: Observable<boolean>;

  /**
   * Opens the drawer.
   */
  public open(): void {
    this.start.open();
  }

  /**
   * Closes the drawer.
   */
  public close(): void {
    this.start.close();
  }

  /**
   * Inverts the opened state of the drawer.
   */
  public toggle(): void {
    this.start.toggle();
  }

  /**
   * Enables the drawer.
   * @param open If true, the drawer is opened after activation.
   */
  public enable(open?: boolean): void {
    this.start.enable(open);
  }

  /**
   * Disables the drawer and closes it.
   */
  public disable(): void {
    this.start.disable();
  }
}