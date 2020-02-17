import { PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { DrawerToggleButtonComponent } from './drawer-toggle-button.component';
import { DRAWER_CONFIG, defaultDrawerLayoutConfig } from '../drawer.config';
import { windowFactory } from '../drawer-layout.module';

describe('DrawerToggleButtonComponent', () => {
  let component: DrawerToggleButtonComponent;
  let fixture: ComponentFixture<DrawerToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatIconModule,
      ],
      providers: [
        { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: DRAWER_CONFIG, useValue: defaultDrawerLayoutConfig },
      ],
      declarations: [DrawerToggleButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
