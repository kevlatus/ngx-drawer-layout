import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { DrawerConfigFormComponent } from './drawer-config-form.component';

@Component({
  template: `
    <ngx-drawer-layout>
      <div ngxDrawer></div>
      <app-drawer-config-form ngxDrawerLayoutContent></app-drawer-config-form>
    </ngx-drawer-layout>
  `,
})
class TestComponent {
  @ViewChild(DrawerConfigFormComponent)
  configForm: DrawerConfigFormComponent;
}

describe('DrawerConfigFormComponent', () => {
  let component: DrawerConfigFormComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerConfigFormComponent, TestComponent],
      imports: [
        DrawerLayoutModule,
        FormsModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance.configForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
