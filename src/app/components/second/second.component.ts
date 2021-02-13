import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeyPressDistributionService } from '../../shared/services/key-press-distribution.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  constructor(private keyService: KeyPressDistributionService) { }

  public ngOnInit() {
    this.keyService.keyEventObs.subscribe(
      x => { console.log('second one, x=', x)}
    );
  }

  public ngOnDestroy() {
    this.keyService.keyEventObs.unsubscribe();
  }
}
