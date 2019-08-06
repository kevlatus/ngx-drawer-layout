import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {DrawerToggleButtonComponent} from './drawer-toggle-button.component';
import {DEFAULT_CONFIG, startDrawerConfig, endDrawerConfig} from '../../config';

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
        {provide: startDrawerConfig, useValue: DEFAULT_CONFIG},
        {provide: endDrawerConfig, useValue: DEFAULT_CONFIG},
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
