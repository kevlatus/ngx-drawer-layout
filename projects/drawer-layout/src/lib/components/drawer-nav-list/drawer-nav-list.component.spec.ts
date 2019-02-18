import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {DrawerNavListComponent} from './drawer-nav-list.component';
import {DrawerItemComponent} from '../drawer-item/drawer-item.component';

describe('DrawerNavListComponent', () => {
  let component: DrawerNavListComponent;
  let fixture: ComponentFixture<DrawerNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerItemComponent,
        DrawerNavListComponent
      ],
      imports: [
        RouterModule,
        MatIconModule,
      ],
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
