import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { DrawerConfigFormComponent } from './drawer-config-form.component';

@Component({
  template: `
    <ngx-drawer-layout>
      <div ngxDrawer #drawer="ngxDrawer"></div>
      <app-drawer-config-form
        ngxDrawerLayoutContent
        [drawer]="drawer.controller"
      ></app-drawer-config-form>
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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DrawerConfigFormComponent, TestComponent],
        imports: [
          BrowserAnimationsModule,
          DrawerLayoutModule,
          FormsModule,
          MatButtonToggleModule,
          MatSlideToggleModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.configForm;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
