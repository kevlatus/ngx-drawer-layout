import {
  Inject,
  Injectable,
  OnDestroy,
  Optional,
  SkipSelf,
} from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { DrawerController, DrawerControllerImpl } from './drawer.controller';
import { DrawerMode, DrawerPosition, MatDrawerMode } from './drawer.models';

export abstract class DrawerService {
  abstract readonly isDisabled$: Observable<boolean>;
  abstract readonly isOpen$: Observable<boolean>;
  abstract readonly mode$: Observable<DrawerMode>;
  abstract readonly matMode$: Observable<MatDrawerMode>;

  abstract getDrawer(position: DrawerPosition): DrawerController;

  abstract hasDrawer(position: DrawerPosition): boolean;

  abstract close(): void;

  abstract disable(): void;

  abstract enable(): void;

  abstract open(): void;

  abstract toggle(): void;

  abstract setMode(mode: DrawerMode): void;
}

/**
 * Service for controlling the state of the {@link DrawerLayoutComponent} used by
 * this application.
 */
@Injectable({ providedIn: 'root' })
export class DrawerServiceImpl implements DrawerService, OnDestroy {
  private readonly _drawers: { [key in DrawerPosition]: DrawerController };

  constructor(
    @Inject('window') window: any,
    eventManager: EventManager,
    @Optional() @SkipSelf() self?: DrawerService
  ) {
    if (self) {
      console.warn(
        'More than one DrawerService instance was provided. Consider using only one drawer layout.'
      );
    }

    this._drawers = {
      start: new DrawerControllerImpl(window, eventManager),
      end: new DrawerControllerImpl(window, eventManager),
    };
  }

  ngOnDestroy(): void {
    for (const ctrl of Object.values(this._drawers)) {
      ctrl.dispose();
    }
  }

  public getDrawer(position: DrawerPosition = 'start'): DrawerController {
    return this._drawers[position];
  }

  public hasDrawer(position: DrawerPosition): boolean {
    return !!this.getDrawer(position);
  }

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public get isOpen$(): Observable<boolean> {
    return this.getDrawer().isOpen$;
  }

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public get isDisabled$(): Observable<boolean> {
    return this.getDrawer().isDisabled$;
  }

  public get mode$(): Observable<DrawerMode> {
    return this.getDrawer().mode$;
  }

  public get matMode$(): Observable<MatDrawerMode> {
    return this.getDrawer().matMode$;
  }

  /**
   * Opens the drawer.
   */
  public open(): void {
    this.getDrawer().open();
  }

  /**
   * Closes the drawer.
   */
  public close(): void {
    this.getDrawer().close();
  }

  /**
   * Inverts the opened state of the drawer.
   */
  public toggle(): void {
    this.getDrawer().toggle();
  }

  /**
   * Enables the drawer.
   * @param open If true, the drawer is opened after activation.
   */
  public enable(open?: boolean): void {
    this.getDrawer().enable(open);
  }

  /**
   * Disables the drawer and closes it.
   */
  public disable(): void {
    this.getDrawer().disable();
  }

  public setMode(mode: DrawerMode) {
    this.getDrawer().setMode(mode);
  }
}
