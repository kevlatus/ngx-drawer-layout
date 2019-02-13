import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerToggleButtonComponent } from './drawer-toggle-button.component';

describe('DrawerToggleButtonComponent', () => {
  let component: DrawerToggleButtonComponent;
  let fixture: ComponentFixture<DrawerToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerToggleButtonComponent ]
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
