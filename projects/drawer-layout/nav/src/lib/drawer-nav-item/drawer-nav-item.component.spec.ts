import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerItemComponent } from './drawer-item.component';
import { MatIconModule } from '@angular/material/icon';

describe('DrawerItemComponent', () => {
  let component: DrawerItemComponent;
  let fixture: ComponentFixture<DrawerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
      ],
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
