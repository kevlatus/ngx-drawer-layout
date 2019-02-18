import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {DrawerToggleButtonComponent} from './drawer-toggle-button.component';

describe('DrawerToggleButtonComponent', () => {
  let component: DrawerToggleButtonComponent;
  let fixture: ComponentFixture<DrawerToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatIconModule,
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
