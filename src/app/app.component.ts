import { Component, HostListener, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  title = "keypress-poc";

  @HostListener("document:keypress", ["$event"])
  public onKeyUp(eventData: KeyboardEvent) {
    console.log(eventData);
  }
}
