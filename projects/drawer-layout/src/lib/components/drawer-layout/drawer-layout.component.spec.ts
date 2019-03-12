import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DrawerLayoutComponent} from './drawer-layout.component';
import {DEFAULT_CONFIG, initialDisabled, initialOpen} from '../../config';

describe('DrawerLayoutComponent', () => {
  let component: DrawerLayoutComponent;
  let fixture: ComponentFixture<DrawerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
      ],
      providers: [
        {provide: initialDisabled, useValue: DEFAULT_CONFIG.initialDisabled},
        {provide: initialOpen, useValue: DEFAULT_CONFIG.initialOpen},
      ],
      declarations: [DrawerLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
