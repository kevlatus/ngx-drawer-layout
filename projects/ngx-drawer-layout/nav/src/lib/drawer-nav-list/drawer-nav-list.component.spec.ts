import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { RouterTestingModule } from "@angular/router/testing";

import { DrawerNavListComponent } from "./drawer-nav-list.component";
import { DrawerNavItemComponent } from "../drawer-nav-item/drawer-nav-item.component";

describe("DrawerNavListComponent", () => {
  let component: DrawerNavListComponent;
  let fixture: ComponentFixture<DrawerNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerNavItemComponent, DrawerNavListComponent],
      imports: [RouterTestingModule, MatIconModule],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
