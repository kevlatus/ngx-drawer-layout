import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private isOpenedSubject = new BehaviorSubject<boolean>(false);
  private isDisabledSubject = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  public get isOpened$(): Observable<boolean> {
    return this.isOpenedSubject.asObservable();
  }

  public get isDisabled$(): Observable<boolean> {
    return this.isDisabledSubject.asObservable();
  }

  public open(): void {
    this.isOpenedSubject.next(true);
  }

  public close(): void {
    this.isOpenedSubject.next(false);
  }

  public toggle(): void {
    this.isOpenedSubject.next(!this.isOpenedSubject.value);
  }

  public enable(open: boolean): void {
    this.isDisabledSubject.next(false);
    if (open) {
      this.open();
    }
  }

  public disable(): void {
    this.isDisabledSubject.next(true);
    this.close();
  }
}
