import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { FirstPageComponent } from './first-page.component';
import { DrawerConfigFormComponent } from '../drawer-config-form/drawer-config-form.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerConfigFormComponent,
        FirstPageComponent,
      ],
      imports: [
        FormsModule,
        MatButtonToggleModule,
        MatCardModule,
        MatSlideToggleModule,
        DrawerLayoutModule.forRoot(),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
