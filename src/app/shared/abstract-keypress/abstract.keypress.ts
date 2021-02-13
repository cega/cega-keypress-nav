import { Component, Directive,  OnDestroy, OnInit } from "@angular/core";

import { KeyPressDistributionService } from "../services/key-press-distribution.service";


@Component({
  selector:'abstract-kp',
  template:'<div></div>'
})           
export abstract class AbstractKeypress implements OnInit, OnDestroy {
  protected constructor(private keyServiceRef: KeyPressDistributionService) {}

  public ngOnInit() {
    this.keyServiceRef.keyEventObs.subscribe(this.reactToKeyPress);
  }

  public ngOnDestroy() {
    this.keyServiceRef.keyEventObs.unsubscribe();
  }

  abstract reactToKeyPress(key: KeyboardEvent): void;
}
