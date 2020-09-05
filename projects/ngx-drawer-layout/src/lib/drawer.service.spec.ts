import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DrawerService, DrawerServiceImpl } from './drawer.service';
import { windowFactory } from './drawer-layout.module';

describe('DrawerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: DrawerService, useClass: DrawerServiceImpl },
        { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
      ],
    })
  );

  it('should be created', () => {
    const service: DrawerService = TestBed.inject(DrawerService);
    expect(service).toBeTruthy();
  });
});
