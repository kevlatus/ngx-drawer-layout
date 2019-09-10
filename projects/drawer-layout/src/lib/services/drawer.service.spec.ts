import {TestBed} from '@angular/core/testing';

import {DrawerService} from './drawer.service';
import {startDrawerConfig, endDrawerConfig} from '../config';

describe('DrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: startDrawerConfig,
        useValue: {initialDisabled: false, initialOpen: true},
      },
      {
        provide: endDrawerConfig,
        useValue: {initialDisabled: true, initialOpen: false},
      },
    ],
  }));

  it('should be created', () => {
    const service: DrawerService = TestBed.get(DrawerService);
    expect(service).toBeTruthy();
  });
});
