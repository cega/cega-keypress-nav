import { Component, OnInit } from "@angular/core";
import { AbstractKeypress } from "../../../../shared/abstract-keypress/abstract.keypress";
import { KeyPressDistributionService } from "../../../../shared/services/key-press-distribution.service";

@Component({
  selector: "app-example-landing",
  templateUrl: "./example-landing.component.html",
  styleUrls: ["./example-landing.component.sass"]
})
export class ExampleLandingComponent extends AbstractKeypress {
  constructor(private keyService: KeyPressDistributionService) {
    super(keyService);
  }
  public keyActions: { [key: string]: () => void } = {
    "k--KeyA": () => {
      console.log("reacting to A");
    },
    "k-as-KeyD": this.deleteSomething,
    "k--F5": () => {
      console.log("F5 clicked!!!");
    }
  };

  public reactToKeyPress(key: string): void {
    console.log("in Example Module Component", key);
  }

  private deleteSomething(): void {
    console.log('deleting something due to key click');
  }
}
