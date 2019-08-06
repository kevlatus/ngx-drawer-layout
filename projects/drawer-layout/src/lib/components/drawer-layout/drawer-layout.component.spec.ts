import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DrawerLayoutComponent} from './drawer-layout.component';
import {DEFAULT_CONFIG, endDrawerConfig, startDrawerConfig} from '../../config';

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
        {provide: startDrawerConfig, useValue: DEFAULT_CONFIG},
        {provide: endDrawerConfig, useValue: DEFAULT_CONFIG},
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
