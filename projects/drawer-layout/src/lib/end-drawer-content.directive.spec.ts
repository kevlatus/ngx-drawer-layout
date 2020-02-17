import { Component, DebugElement, PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EndDrawerContentDirective } from './end-drawer-content.directive';
import { DrawerService } from './drawer.service';
import { DRAWER_CONFIG, defaultDrawerLayoutConfig } from './drawer.config';
import { windowFactory } from './drawer-layout.module';

@Component({
  template: `
    <div ngxEndDrawerContent>Test</div>`
})
class TestEndDrawerContentComponent {
}

describe('EndDrawerContentDirective', () => {
  let component: TestEndDrawerContentComponent;
  let fixture: ComponentFixture<TestEndDrawerContentComponent>;
  let buttonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: DRAWER_CONFIG, useValue: defaultDrawerLayoutConfig },
        DrawerService,
      ],
      declarations: [
        TestEndDrawerContentComponent,
        EndDrawerContentDirective,
      ],
    });

    fixture = TestBed.createComponent(TestEndDrawerContentComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('[ngxEndDrawerContent]'));
  }));

  it('clicking a button', () => {
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(true); // TODO
  });
});
