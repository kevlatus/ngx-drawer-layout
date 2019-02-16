import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

/**
 * Service for controlling the state of the {@link DrawerLayoutComponent} used by
 * this application.
 */
@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private isOpenedSubject = new BehaviorSubject<boolean>(false);
  private isDisabledSubject = new BehaviorSubject<boolean>(false);

  /**
   * Returns an observable, which fires when the opened state of the drawer changes.
   */
  public get isOpened$(): Observable<boolean> {
    return this.isOpenedSubject.asObservable();
  }

  /**
   * Returns an observable, which fires, when the drawer is en-/disabled.
   */
  public get isDisabled$(): Observable<boolean> {
    return this.isDisabledSubject.asObservable();
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
}
