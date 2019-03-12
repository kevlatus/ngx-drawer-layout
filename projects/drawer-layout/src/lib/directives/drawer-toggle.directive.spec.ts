import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrawerToggleDirective} from './drawer-toggle.directive';
import {DrawerService} from '../services/drawer.service';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DEFAULT_CONFIG, initialDisabled, initialOpen} from '../config';

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
        {provide: initialDisabled, useValue: DEFAULT_CONFIG.initialDisabled},
        {provide: initialOpen, useValue: DEFAULT_CONFIG.initialOpen},
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
