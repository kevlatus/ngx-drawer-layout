import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DrawerService } from './drawer.service';
import { defaultDrawerLayoutOptions, drawerOptionsToken } from './drawer.config';
import { windowFactory } from './drawer-layout.module';

describe('DrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
      { provide: drawerOptionsToken, useValue: defaultDrawerLayoutOptions },
    ],
  }));

  it('should be created', () => {
    const service: DrawerService = TestBed.get(DrawerService);
    expect(service).toBeTruthy();
  });
});
