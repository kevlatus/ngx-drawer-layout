import {InjectionToken} from '@angular/core';

export interface DrawerLayoutConfig {
  initialDisabled?: boolean;
  initialOpen?: boolean;
}

export const DEFAULT_CONFIG: DrawerLayoutConfig = {
  initialDisabled: false,
  initialOpen: true,
};

export const initialOpen = new InjectionToken<string[]>('initialOpen');
export const initialDisabled = new InjectionToken<string[]>('initialDisabled');
