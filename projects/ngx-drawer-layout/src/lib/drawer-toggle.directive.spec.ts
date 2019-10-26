import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DrawerToggleDirective } from './drawer-toggle.directive';
import { DrawerService } from './drawer.service';
import { startDrawerConfig, endDrawerConfig } from '../config';

@Component({
  template: `
    <button ngxDrawerToggle>Test</button>`
})
class TestDrawerToggleComponent {
}

describe('DrawerToggleDirective', () => {
  let component: TestDrawerToggleComponent;
  let fixture: ComponentFixture<TestDrawerToggleComponent>;
  let buttonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: startDrawerConfig,
          useValue: { initialDisabled: false, initialOpen: true },
        },
        {
          provide: endDrawerConfig,
          useValue: { initialDisabled: true, initialOpen: false },
        },
        DrawerService,
      ],
      declarations: [
        TestDrawerToggleComponent,
        DrawerToggleDirective,
      ],
    });

    fixture = TestBed.createComponent(TestDrawerToggleComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
  }));

  it('clicking a button', () => {
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(true); // TODO
  });
});
