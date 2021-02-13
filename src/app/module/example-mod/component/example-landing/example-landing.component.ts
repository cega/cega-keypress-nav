import { Component, OnInit } from '@angular/core';
import { AbstractKeypress } from '../../../../shared/abstract-keypress/abstract.keypress';
import { KeyPressDistributionService } from '../../../../shared/services/key-press-distribution.service';

@Component({
  selector: 'app-example-landing',
  templateUrl: './example-landing.component.html',
  styleUrls: ['./example-landing.component.sass']
})
export class ExampleLandingComponent extends AbstractKeypress{

  constructor(private keyService: KeyPressDistributionService) {
    super(keyService);
  }

  public reactToKeyPress(key: KeyboardEvent): void {
    console.log('in Example Module Component', key);
  }

}
