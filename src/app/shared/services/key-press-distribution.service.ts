import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyPressDistributionService {

  public keyEventObs = new Subject<KeyboardEvent>(); // Observable<KeyboardEvent>

  constructor() { }

  public distributeKeyPress(keyValue: KeyboardEvent) {
    // console.log('distributeKeyPress->keyValue=', keyValue)
    this.keyEventObs.next(keyValue);
  }
}
