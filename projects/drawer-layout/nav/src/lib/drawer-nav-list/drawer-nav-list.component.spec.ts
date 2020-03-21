import { PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { DRAWER_CONFIG, defaultDrawerLayoutConfig } from '../drawer.config';
import { DrawerNavListComponent } from './drawer-nav-list.component';
import { DrawerItemComponent } from '../drawer-item/drawer-item.component';
import { windowFactory } from '../drawer-layout.module';

describe('DrawerNavListComponent', () => {
  let component: DrawerNavListComponent;
  let fixture: ComponentFixture<DrawerNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerItemComponent,
        DrawerNavListComponent,
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
      ],
      providers: [
        { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: DRAWER_CONFIG, useValue: defaultDrawerLayoutConfig },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
