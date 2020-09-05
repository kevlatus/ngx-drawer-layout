import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { DrawerNavListComponent } from './drawer-nav-list.component';
import { DrawerNavItemComponent } from '../drawer-nav-item/drawer-nav-item.component';

@Component({
  template: `
    <ngx-drawer-layout>
      <ngx-drawer-nav-list [items]="[]" ngxDrawer></ngx-drawer-nav-list>
    </ngx-drawer-layout>
  `,
})
class TestComponent {
  @ViewChild(DrawerNavListComponent)
  child: DrawerNavListComponent;
}

describe('DrawerNavListComponent', () => {
  let component: DrawerNavListComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerNavItemComponent,
        DrawerNavListComponent,
        TestComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        DrawerLayoutModule,
        MatIconModule,
        RouterTestingModule,
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.child;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
