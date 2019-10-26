import { InjectionToken } from '@angular/core';

export interface DrawerConfig {
  initialDisabled?: boolean;
  initialOpen?: boolean;
}

export const startDrawerConfig = new InjectionToken<DrawerConfig>('startDrawerConfig');
export const endDrawerConfig = new InjectionToken<DrawerConfig>('endDrawerConfig');