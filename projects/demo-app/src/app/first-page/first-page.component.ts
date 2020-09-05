import { Component } from "@angular/core";
import { DrawerService } from "ngx-drawer-layout";

@Component({
  selector: "app-first-page",
  templateUrl: "./first-page.component.html",
  styleUrls: ["./first-page.component.scss"],
})
export class FirstPageComponent {
  constructor(public drawer: DrawerService) {}
}
