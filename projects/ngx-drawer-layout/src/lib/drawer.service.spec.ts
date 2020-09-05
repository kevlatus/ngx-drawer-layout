import { PLATFORM_ID } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { DrawerServiceImpl } from "./drawer.service";
import {
  defaultDrawerLayoutOptions,
  drawerOptionsToken,
} from "./drawer.config";
import { windowFactory } from "./drawer-layout.module";

describe("DrawerService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: "window", useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: drawerOptionsToken, useValue: defaultDrawerLayoutOptions },
      ],
    })
  );

  it("should be created", () => {
    const service: DrawerServiceImpl = TestBed.get(DrawerServiceImpl);
    expect(service).toBeTruthy();
  });
});
