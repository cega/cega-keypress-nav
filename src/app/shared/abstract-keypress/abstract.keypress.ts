import { Component, Directive,  OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { KeyPressDistributionService } from "../services/key-press-distribution.service";


@Component({
  selector:'abstract-kp',
  template:'<div></div>'
})           
export abstract class AbstractKeypress implements OnInit, OnDestroy {

  private obsRef: Subscription;

  protected constructor(private keyServiceRef: KeyPressDistributionService) {}

  public ngOnInit() {
    this.obsRef = this.keyServiceRef.keyEventObs.subscribe(this.reactToKeyPress);
  }

  public ngOnDestroy() {
    this.obsRef.unsubscribe();
  }

  abstract reactToKeyPress(key: KeyboardEvent): void;
}
