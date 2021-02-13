import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeyPressDistributionService } from '../../shared/services/key-press-distribution.service';

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss']
})
export class FirstOneComponent implements OnInit, OnDestroy {

  constructor(private keyService: KeyPressDistributionService) { }

  public ngOnInit() {
    this.keyService.keyEventObs.subscribe(
      (x: KeyboardEvent) => { console.log('first one, x=', x)}
    );
  }

  public ngOnDestroy() {
    this.keyService.keyEventObs.unsubscribe();
  }
}