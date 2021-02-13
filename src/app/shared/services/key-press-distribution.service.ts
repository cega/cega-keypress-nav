import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyPressDistributionService {

  public keyEventObs = new Subject(); // Observable<KeyboardEvent>

  constructor() { }

  public distributeKeyPress(keyValue: string) {
    // console.log('distributeKeyPress->keyValue=', keyValue)
    this.keyEventObs.next(keyValue);
  }
}
