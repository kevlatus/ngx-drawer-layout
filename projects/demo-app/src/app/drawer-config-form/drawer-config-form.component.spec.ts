import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerController } from 'ngx-drawer-layout';

import { DrawerConfigFormComponent } from './drawer-config-form.component';

describe('DrawerConfigFormComponent', () => {
  let component: DrawerConfigFormComponent;
  let fixture: ComponentFixture<DrawerConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerConfigFormComponent],
      imports: [
        FormsModule,
        MatSlideToggleModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerConfigFormComponent);
    component = fixture.componentInstance;
    component.drawer = {} as DrawerController; // TODO
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
