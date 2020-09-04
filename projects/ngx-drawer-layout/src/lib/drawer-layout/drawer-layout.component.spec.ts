import { PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DrawerLayoutComponent } from './drawer-layout.component';
import { drawerOptionsToken, defaultDrawerLayoutOptions } from '../drawer.config';
import { windowFactory } from '../drawer-layout.module';

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
        { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: drawerOptionsToken, useValue: defaultDrawerLayoutOptions },
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
