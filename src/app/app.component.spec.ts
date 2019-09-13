import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DrawerLayoutModule} from 'drawer-layout';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        DrawerLayoutModule.forRoot(),
      ]
    }).compileComponents();
  }));
});
