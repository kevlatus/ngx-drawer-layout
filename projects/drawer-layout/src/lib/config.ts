import { InjectionToken } from '@angular/core';

export interface DrawerConfig {
  initialDisabled?: boolean;
  initialOpen?: boolean;
}

export const DEFAULT_CONFIG: DrawerConfig = {
  initialDisabled: false,
  initialOpen: true,
};

export interface DrawerLayoutConfig extends DrawerConfig {
  end?: DrawerConfig;
}

export const startDrawerConfig = new InjectionToken<DrawerConfig>('startDrawerConfig');
export const endDrawerConfig = new InjectionToken<DrawerConfig>('endDrawerConfig');

export function mergeConfig(config: DrawerConfig): DrawerConfig {
  if (!config) {
    return DEFAULT_CONFIG;
  }

  return {
    initialDisabled: config.initialDisabled === undefined
      ? DEFAULT_CONFIG.initialDisabled
      : config.initialDisabled,
    initialOpen: config.initialOpen === undefined
      ? DEFAULT_CONFIG.initialOpen
      : config.initialOpen,
  };
}
