import {TestBed} from '@angular/core/testing';

import {DrawerService} from './drawer.service';
import {DEFAULT_CONFIG, startDrawerConfig, endDrawerConfig} from '../config';

describe('DrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: startDrawerConfig, useValue: DEFAULT_CONFIG},
      {provide: endDrawerConfig, useValue: DEFAULT_CONFIG},
    ],
  }));

  it('should be created', () => {
    const service: DrawerService = TestBed.get(DrawerService);
    expect(service).toBeTruthy();
  });
});
