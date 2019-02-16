import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrawerItemComponent} from './drawer-item.component';

describe('DrawerItemComponent', () => {
  let component: DrawerItemComponent;
  let fixture: ComponentFixture<DrawerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
