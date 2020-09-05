import { Inject, Injectable, OnDestroy } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { BehaviorSubject, Observable, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { DrawerMode, MatDrawerMode } from './drawer.models';

export abstract class DrawerController {
  readonly isOpen$: Observable<boolean>;
  readonly isDisabled$: Observable<boolean>;
  readonly mode$: Observable<DrawerMode>;
  readonly matMode$: Observable<MatDrawerMode>;

  abstract open(): void;
  abstract close(): void;
  abstract toggle(): void;
  abstract enable(open?: boolean): void;
  abstract disable(): void;
  abstract setMode(mode: DrawerMode): void;
}

export interface DrawerOptions {
  disabled: boolean;
  open: boolean;
  mode: DrawerMode;
}

class DrawerModeController {
  private _mode = new BehaviorSubject<DrawerMode>(null);
  private _matMode = new BehaviorSubject<MatDrawerMode>(null);
  private _unregisterHandler: Function;

  public readonly mode$ = this._mode
    .asObservable()
    .pipe(distinctUntilChanged());

  public readonly matMode$ = this._matMode
    .asObservable()
    .pipe(distinctUntilChanged());

  private _detectMode(): MatDrawerMode {
    return this.window.innerWidth > 960 ? 'side' : 'over';
  }

  private _onResize = () => {
    this._matMode.next(this._detectMode());
  };

  constructor(private window: Window, private events: EventManager) {}

  public setMode(mode: DrawerMode) {
    this._mode.next(mode);
    if (mode !== 'responsive') {
      this._matMode.next(mode);
      if (this._unregisterHandler) {
        this._unregisterHandler();
        this._unregisterHandler = null;
      }
    } else {
      this._matMode.next(this._detectMode());
      this._unregisterHandler = this.events.addGlobalEventListener(
        'window',
        'resize',
        this._onResize
      );
    }
  }
}

@Injectable()
export class DrawerControllerImpl implements DrawerController, OnDestroy {
  private readonly _destroy$ = new Subject();
  private readonly _isDisabled = new BehaviorSubject<boolean>(null);
  private readonly _isOpen = new BehaviorSubject<boolean>(null);
  private readonly _modeCtrl: DrawerModeController;

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public readonly isOpen$: Observable<boolean> = combineLatest([
    this._isOpen,
    this._isDisabled,
  ]).pipe(
    map(([open, disabled]) => open && !disabled),
    distinctUntilChanged()
  );

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public readonly isDisabled$: Observable<
    boolean
  > = this._isDisabled.asObservable().pipe(distinctUntilChanged());

  public readonly mode$: Observable<DrawerMode>;
  public readonly matMode$: Observable<MatDrawerMode>;

  init({ disabled, open, mode }: DrawerOptions): void {
    this._isDisabled.next(disabled);
    this._isOpen.next(open);
    this.setMode(mode);
  }

  constructor(
    @Inject('window') private window: any,
    private eventManager: EventManager
  ) {
    this._modeCtrl = new DrawerModeController(window, eventManager);
    this.mode$ = this._modeCtrl.mode$;
    this.matMode$ = this._modeCtrl.matMode$;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  /**
   * Opens the drawer.
   */
  public open(): void {
    this._isOpen.next(true);
  }

  /**
   * Closes the drawer.
   */
  public close(): void {
    this._isOpen.next(false);
  }

  /**
   * Inverts the opened state of the drawer.
   */
  public toggle(): void {
    this._isOpen.next(!this._isOpen.value);
  }

  /**
   * Enables the drawer.
   * @param open If true, the drawer is opened after activation.
   */
  public enable(open?: boolean): void {
    this._isDisabled.next(false);
    if (open) {
      this.open();
    }
  }

  /**
   * Disables the drawer and closes it.
   */
  public disable(): void {
    this._isDisabled.next(true);
    this.close();
  }

  public setMode(mode: DrawerMode): void {
    this._modeCtrl.setMode(mode);
  }
}
