import { Component, PLATFORM_ID, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { windowFactory } from "./drawer-layout.module";
import { DrawerLayoutComponent } from "./drawer-layout/drawer-layout.component";
import { DrawerDirective } from "./drawer.directive";

@Component({
  template: `
    <ngx-drawer-layout>
      <div ngxDrawer></div>
    </ngx-drawer-layout>
  `,
})
class TestComponent {
  @ViewChild(DrawerDirective)
  drawer: DrawerDirective;
}

describe("DrawerDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [DrawerDirective, DrawerLayoutComponent, TestComponent],
      providers: [
        { provide: "window", useFactory: windowFactory, deps: [PLATFORM_ID] },
      ],
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });

  it("should create an instance", () => {
    const directive = fixture.componentInstance.drawer;
    expect(directive).toBeTruthy();
  });
});
