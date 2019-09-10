import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DrawerLayoutComponent} from './drawer-layout.component';
import {endDrawerConfig, startDrawerConfig} from '../../config';

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
        {
          provide: startDrawerConfig,
          useValue: {initialDisabled: false, initialOpen: true},
        },
        {
          provide: endDrawerConfig,
          useValue: {initialDisabled: true, initialOpen: false},
        },
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
