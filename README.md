<a target="_blank" href="https://www.npmjs.com/package/ngx-drawer-layout">![](https://img.shields.io/npm/v/ngx-drawer-layout.svg)</a>
[![Build Status](https://github.com/kevlatus/ngx-drawer-layout/workflows/Deploy/badge.svg)](https://github.com/kevlatus/ngx-drawer-layout/actions)

# Angular Drawer Layout

This library provides [Angular](https://angular.io/) components for implementing a
[Material Design Drawer](https://material.io/design/components/navigation-drawer.html).
It relies on the [Angular Material Library](https://material.angular.io/).

## Installing

Before installing, make sure to add Angular Material to your project. When using Angular CLI, you can run:

```
ng add @angular/material
```

For alternative installation refer to the [quick start guide](https://material.angular.io/guide/getting-started).

Using npm, you can install the library with:

```
npm install --save ngx-drawer-layout
```

### Enabling Material theming

If you want to benefit from Material theming, you need to use Angular Material
with [a custom theme](https://material.angular.io/guide/theming#defining-a-custom-theme).
Then, you can add theming to the drawer layout like this:

```scss
@import '~@angular/material/theming';
@import '~ngx-drawer-layout/theming'; // <-- include SASS lib file

@include mat-core();

$primary: mat-palette($mat-indigo);
$accent: mat-palette($mat-pink, A200, A100, A400);
$warn: mat-palette($mat-red);
$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include ngx-drawer-layout-theme($theme); // <-- include the drawer layout theme
```

## Usage

**1. Import the DrawerLayoutModule**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrawerLayoutModule } from 'ngx-drawer-layout';

@NgModule({
  imports: [
    BrowserModule,
    DrawerLayoutModule, // <-- import module
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**2. Use the DrawerLayoutComponent**

```html
<ngx-drawer-layout>
  <mat-toolbar ngxDrawerLayoutHeader>
    <button ngxDrawerToggle>Toggle</button>
    <div>NGX Drawer Layout Demo</div>
  </mat-toolbar>

  <div ngxDrawer>
    <div>Drawer Content</div>
  </div>

  <div ngxDrawerLayoutContent>
    <div>App Content</div>
  </div>
</ngx-drawer-layout>
```
