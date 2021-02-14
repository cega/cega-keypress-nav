import { Component, HostListener, VERSION } from "@angular/core";
import { KeyPressDistributionService } from "./shared/services/key-press-distribution.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(private keyService: KeyPressDistributionService) {
  }

  @HostListener("document:keyup", ["$event"])
  public onKeyUp(eventData: KeyboardEvent) {
    this.keyService.distributeKeyPress(eventData);
  }

}
