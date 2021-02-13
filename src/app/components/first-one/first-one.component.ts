import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractKeypress } from "../../shared/abstract-keypress/abstract.keypress";
import { KeyPressDistributionService } from "../../shared/services/key-press-distribution.service";

@Component({
  selector: "app-first-one",
  templateUrl: "./first-one.component.html",
  styleUrls: ["./first-one.component.scss"]
})
export class FirstOneComponent extends AbstractKeypress {
  
  userForm = this.fb.group({
    name: [""],
    age: [""]
  });

  constructor(
    private keyService: KeyPressDistributionService,
    private fb: FormBuilder
  ) {
    super(keyService);
  }

  public reactToKeyPress(key: KeyboardEvent) {
    console.log('first one, x=', key);
  }

  public onSubmit() {
    console.log("form content", this.userForm.value);
  }

  public stopKeyPressPropagation($event:KeyboardEvent) {
    $event.stopPropagation();
    console.log($event);
  }
}
