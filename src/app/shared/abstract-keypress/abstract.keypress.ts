import { Component, Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

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
      .pipe(
        filter(this.permitKey),
        map(this.convertToString)
      )
      .subscribe(this.reactToKeyPress);
  }
  
  abstract reactToKeyPress(key: string): void;

  public ngOnDestroy() {
    this.obsRef.unsubscribe();
  }

  public permitKey(keyEvent: KeyboardEvent): boolean {
    const disallowedKeys = ["Shift", "Control", "Alt", "Meta"];
    return !disallowedKeys.includes(keyEvent.key);
  }

  public convertToString(keyEvent: KeyboardEvent): string {
    const modifierKeys = ["altKey", "ctrlKey", "shiftKey"];
    let keyCode = "k-";
    for (const code of modifierKeys) {
      if (keyEvent[code]) keyCode += code.substr(0, 1);
    }
    return `${keyCode}-${keyEvent.code}`;
  }
}
