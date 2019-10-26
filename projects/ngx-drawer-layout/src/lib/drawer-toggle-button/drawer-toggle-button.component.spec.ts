import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { DrawerToggleButtonComponent } from './drawer-toggle-button.component';
import { startDrawerConfig, endDrawerConfig } from '../config';

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
        {
          provide: startDrawerConfig,
          useValue: { initialDisabled: false, initialOpen: true },
        },
        {
          provide: endDrawerConfig,
          useValue: { initialDisabled: true, initialOpen: false },
        },
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
