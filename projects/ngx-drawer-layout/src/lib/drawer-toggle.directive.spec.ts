import { Component, DebugElement, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DrawerToggleDirective } from './drawer-toggle.directive';
import { windowFactory } from './drawer-layout.module';
import { DrawerLayoutComponent } from './drawer-layout/drawer-layout.component';
import { DrawerDirective } from './drawer.directive';

@Component({
  template: `
    <ngx-drawer-layout>
      <div ngxDrawer></div>
      <button ngxDrawerToggle ngxDrawerLayoutContent>Test</button>
    </ngx-drawer-layout>
  `,
})
class TestComponent {}

describe('DrawerToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let buttonEl: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule, MatSidenavModule],
        providers: [
          { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        ],
        declarations: [
          DrawerDirective,
          DrawerLayoutComponent,
          DrawerToggleDirective,
          TestComponent,
        ],
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      buttonEl = fixture.debugElement.query(By.css('button'));
    })
  );

  it('clicking a button', () => {
    fixture.detectChanges();
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(true);
  });
});
