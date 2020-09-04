import { InjectionToken } from '@angular/core';

export interface DrawerOptions {
  initialDisabled?: boolean;
  initialOpen?: boolean;
  autoDetectMode?: boolean;
}

export interface DrawerLayoutOptions {
  start: DrawerOptions;
  end: DrawerOptions;
}

const defaultStartDrawerOptions: DrawerOptions = {
  autoDetectMode: true,
  initialDisabled: false,
  initialOpen: true,
};

const defaultEndDrawerOptions: DrawerOptions = {
  autoDetectMode: false,
  initialDisabled: true,
  initialOpen: false,
};

export const defaultDrawerLayoutOptions: DrawerLayoutOptions = {
  start: defaultStartDrawerOptions,
  end: defaultEndDrawerOptions,
};

export const drawerOptionsToken = new InjectionToken<DrawerLayoutOptions>('drawerOptionsToken');
export const userDrawerOptionsToken = new InjectionToken<DrawerOptions>('userDrawerOptionsToken');
