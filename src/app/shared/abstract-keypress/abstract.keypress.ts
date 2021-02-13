import { Component, Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

import { KeyPressDistributionService } from "../services/key-press-distribution.service";

@Component({
  selector: "abstract-kp",
  template: "<div></div>"
})
export abstract class AbstractKeypress implements OnInit, OnDestroy {
  private obsRef: Subscription;

  protected constructor(private keyServiceRef: KeyPressDistributionService) {}

  public ngOnInit() {
    this.obsRef = this.keyServiceRef.keyEventObs
      .pipe
        (filter(this.permitKey),
      )
      .subscribe(this.reactToKeyPress);
  }
  abstract reactToKeyPress(key: KeyboardEvent): void;
  public ngOnDestroy() {
    this.obsRef.unsubscribe();
  }

  public permitKey(keyEvent: KeyboardEvent): boolean {
    const disallowedKeys = ["Shift", "Control", "Alt", "Meta"];
    return !disallowedKeys.includes(keyEvent.key);
  }
}
