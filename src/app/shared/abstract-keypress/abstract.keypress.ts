import { Component, Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { aggregate } from "../operators/aggregate.operator";

import { KeyPressDistributionService } from "../services/key-press-distribution.service";

@Component({
  selector: "app-dummy",
  template: "<div></div>"
})
export abstract class AbstractKeypress implements OnInit, OnDestroy {
  private obsRef: Subscription;

  protected constructor(private keyServiceRef: KeyPressDistributionService) {}

  public ngOnInit() {
    this.obsRef = this.keyServiceRef.keyEventObs
      .pipe(
        filter(this.permitKey),
        aggregate(300),
        map(this.convertToString.bind(this))
      )
      .subscribe(this.reactToKeyPress.bind(this));
  }

  abstract keyActions: { [key: string]: () => void };
  abstract reactToKeyPress(key: string): void;

  public ngOnDestroy() {
    this.obsRef.unsubscribe();
  }

  public permitKey(keyEvent: KeyboardEvent): boolean {
    const disallowedKeys = ["Shift", "Control", "Alt", "Meta"];
    return !disallowedKeys.includes(keyEvent.key);
  }

  public convertToString(keyEventList: KeyboardEvent[]): string {
    if (keyEventList.length > 1)
      return this.generateMultiKeystrokeString(keyEventList);
    else {
      const modifiers = this.modifierKeysToString(keyEventList[0]);
      return `${modifiers}-${keyEventList[0].code}`;
    }
  }

  public generateMultiKeystrokeString(keyEventList: KeyboardEvent[]): string {
    const prefix = this.modifierKeysToString(keyEventList[0], "s-");
    let keySequence = "";
    for (const event of keyEventList) {
      keySequence += event.key.toLowerCase();
    }
    console.log(`${prefix}-${keySequence}`);
    return `${prefix}-${keySequence}`;
  }

  private modifierKeysToString(keypress: KeyboardEvent, prefix = "k-"): string {
    const modifierKeys = ["altKey", "ctrlKey", "shiftKey"];
    let keyCode = prefix;
    console.log(`
      keypress
        code = ${keypress.code}
        meta = ${keypress.metaKey} ${keypress['metaKey']}
        shift = ${keypress.shiftKey}
        ctrl = ${keypress.ctrlKey}
        alt  = ${keypress.altKey} ${keypress['altKey']}
      `);

    for (const code of modifierKeys) {
      console.log(`keypress[code] = ${keypress[code]}`);
      if (keypress[code]) keyCode += code.substr(0, 1);
    }
    return keyCode;
  }
}
