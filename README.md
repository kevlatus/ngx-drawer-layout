<a target="_blank" href="https://www.npmjs.com/package/ngx-drawer-layout">![](https://img.shields.io/npm/v/ngx-drawer-layout.svg)</a>
![](https://img.shields.io/circleci/project/github/latusinski/ngx-drawer-layout/master.svg)

# NGX Drawer Layout

This project is a library for [Angular](https://angular.io/). It provides components, which
 support implementing an app layout using a
 [Material Design drawer](https://material.io/design/components/navigation-drawer.html).
 It relies on the [Angular Material Library](https://material.angular.io/).

## Installing

Make sure to add Angular Material to your project. When using Angular CLI, you can run:
```
ng add @angular/material
```
For alternative installation refer to the [quick start guide](https://material.angular.io/guide/getting-started).  

Using npm, you can install the library with:  
```
npm install --save ngx-drawer-layout
```

Using yarn, you can install the library with:  
```
yarn add ngx-drawer-layout
```

## Usage

**1. Import the DrawerLayoutModule**

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DrawerLayoutModule} from 'ngx-drawer-layout';

@NgModule({
    imports: [
        BrowserModule,
        DrawerLayoutModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**2. Use the DrawerLayoutComponent**

```html
<ngx-drawer-layout>
  <mat-toolbar class="ngx-drawer-layout-header">
    <ngx-drawer-toggle-button></ngx-drawer-toggle-button>
    <div>NGX Drawer Layout Demo</div>
  </mat-toolbar>

  <div class="ngx-drawer-content">
    <div>Drawer Content</div>
  </div>

  <div class="ngx-drawer-layout-content">
    <div>App Content</div>
  </div>
</ngx-drawer-layout>
```
