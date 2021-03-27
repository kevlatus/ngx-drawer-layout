import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DrawerController } from './drawer.controller';
import { DrawerMode, DrawerPosition, MatDrawerMode } from './drawer.models';

export abstract class DrawerService implements DrawerController {
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
@Injectable({
  providedIn: 'root',
})
export class DrawerServiceImpl implements DrawerService {
  private readonly _drawers: { [key in DrawerPosition]: DrawerController } = {
    start: null,
    end: null,
  };

  private _getDefaultDrawer(): DrawerController {
    return this.getDrawer('start');
  }

  public registerDrawer(
    position: DrawerPosition,
    ctrl: DrawerController
  ): void {
    this._drawers[position] = ctrl;
  }

  public getDrawer(position: DrawerPosition): DrawerController {
    return this._drawers[position];
  }

  public hasDrawer(position: DrawerPosition): boolean {
    return !!this.getDrawer(position);
  }

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public get isOpen$(): Observable<boolean> {
    return this._getDefaultDrawer().isOpen$;
  }

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public get isDisabled$(): Observable<boolean> {
    return this._getDefaultDrawer().isDisabled$;
  }

  public get mode$(): Observable<DrawerMode> {
    return this._getDefaultDrawer().mode$;
  }

  public get matMode$(): Observable<MatDrawerMode> {
    return this._getDefaultDrawer().matMode$;
  }

  /**
   * Opens the drawer.
   */
  public open(): void {
    this._getDefaultDrawer().open();
  }

  /**
   * Closes the drawer.
   */
  public close(): void {
    this._getDefaultDrawer().close();
  }

  /**
   * Inverts the opened state of the drawer.
   */
  public toggle(): void {
    this._getDefaultDrawer().toggle();
  }

  /**
   * Enables the drawer.
   * @param open If true, the drawer is opened after activation.
   */
  public enable(open?: boolean): void {
    this._getDefaultDrawer().enable(open);
  }

  /**
   * Disables the drawer and closes it.
   */
  public disable(): void {
    this._getDefaultDrawer().disable();
  }

  public setMode(mode: DrawerMode) {
    this._getDefaultDrawer().setMode(mode);
  }
}
