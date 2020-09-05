import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

import { FirstPageComponent } from './first-page.component';
import { DrawerConfigFormComponent } from '../drawer-config-form/drawer-config-form.component';

@Component({
  template: `
    <ngx-drawer-layout>
      <div ngxDrawer></div>
      <app-first-page ngxDrawerLayoutContent></app-first-page>
    </ngx-drawer-layout>
  `,
})
class TestComponent {
  @ViewChild(FirstPageComponent)
  firstPage: FirstPageComponent;
}

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerConfigFormComponent,
        FirstPageComponent,
        TestComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        DrawerLayoutModule,
        FormsModule,
        MatButtonToggleModule,
        MatCardModule,
        MatSlideToggleModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.firstPage;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
