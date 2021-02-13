import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractKeypress } from '../../shared/abstract-keypress/abstract.keypress';
import { KeyPressDistributionService } from '../../shared/services/key-press-distribution.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent  extends AbstractKeypress {

  constructor(private keyService: KeyPressDistributionService) {
    super(keyService)
   }

  public ngOnInit() {
    this.keyService.keyEventObs.subscribe(
      x => { console.log('second one, x=', x)}
    );
  }

  public reactToKeyPress(key: string) {
    console.log('second one, x=', key);
  }

  public ngOnDestroy() {
    this.keyService.keyEventObs.unsubscribe();
  }
}
