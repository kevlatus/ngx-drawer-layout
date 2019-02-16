import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrawerNavItemComponent} from './drawer-nav-item.component';

describe('DrawerNavItemComponent', () => {
  let component: DrawerNavItemComponent;
  let fixture: ComponentFixture<DrawerNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerNavItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
