import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyPressDistributionService {

  private keyEventSubject = new Subject<KeyboardEvent>();
  public keyEventObs = this.keyEventSubject.asObservable();
  
  constructor() { }

  public distributeKeyPress(keyValue: KeyboardEvent) {
    this.keyEventSubject.next(keyValue);
  }
}
