import { TestBed } from '@angular/core/testing';

import { DrawerService } from './drawer.service';
import {DEFAULT_CONFIG, initialDisabled, initialOpen} from '../config';

describe('DrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: initialDisabled, useValue: DEFAULT_CONFIG.initialDisabled},
      {provide: initialOpen, useValue: DEFAULT_CONFIG.initialOpen},
    ],
  }));

  it('should be created', () => {
    const service: DrawerService = TestBed.get(DrawerService);
    expect(service).toBeTruthy();
  });
});
