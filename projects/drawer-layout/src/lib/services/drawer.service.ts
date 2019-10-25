import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { startDrawerConfig, endDrawerConfig, DrawerConfig } from '../config';
import { EventManager } from '@angular/platform-browser';

class DrawerController {
  private readonly isDisabledSubject = new BehaviorSubject<boolean>(false);
  private readonly isOpenedSubject = new BehaviorSubject<boolean>(true);
  private readonly modeSubject = new BehaviorSubject<'over' | 'side'>('over');

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public readonly isOpened$: Observable<boolean> =
    combineLatest([this.isOpenedSubject, this.isDisabledSubject]).pipe(
      map(([open, disabled]) => open && !disabled),
    );

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public readonly isDisabled$: Observable<boolean> = this.isDisabledSubject.asObservable();

  public readonly mode$: Observable<'over' | 'side'> = this.modeSubject.asObservable();

  public onResize() {
    const detectedMode = this.window.innerWidth > 960 ? 'side' : 'over';
    if (detectedMode !== this.modeSubject.value) {
      this.modeSubject.next(detectedMode);
    }
  }

  constructor(private window: Window, disabled: boolean, open: boolean, canDetectMode = true) {
    this.isDisabledSubject.next(disabled);
    this.isOpenedSubject.next(open);

    if (canDetectMode) {
      this.onResize();
    }
  }

  /**
   * Opens the drawer.
   */
  public open(): void {
    this.isOpenedSubject.next(true);
  }

  /**
   * Closes the drawer.
   */
  public close(): void {
    this.isOpenedSubject.next(false);
  }

  /**
   * Inverts the opened state of the drawer.
   */
  public toggle(): void {
    this.isOpenedSubject.next(!this.isOpenedSubject.value);
  }

  /**
   * Enables the drawer.
   * @param open If true, the drawer is opened after activation.
   */
  public enable(open?: boolean): void {
    this.isDisabledSubject.next(false);
    if (open) {
      this.open();
    }
  }

  /**
   * Disables the drawer and closes it.
   */
  public disable(): void {
    this.isDisabledSubject.next(true);
    this.close();
  }

  public setMode(mode: 'over' | 'side'): void {
    this.modeSubject.next(mode);
  }
}

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
    @Inject(startDrawerConfig) startConfig: DrawerConfig,
    @Inject(endDrawerConfig) endConfig: DrawerConfig,
    @Inject('window') window: any,
    eventManager: EventManager
  ) {
    this.start = new DrawerController(window, startConfig.initialDisabled, startConfig.initialOpen);
    this.end = new DrawerController(window, endConfig.initialDisabled, endConfig.initialOpen);

    this.isOpened$ = this.start.isOpened$;
    this.isDisabled$ = this.start.isDisabled$;

    eventManager.addGlobalEventListener('window', 'resize', () => {
      this.start.onResize();
      this.end.onResize();
    });
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
