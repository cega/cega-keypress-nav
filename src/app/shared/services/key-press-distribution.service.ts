import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyPressDistributionService {

  private keyEventSubject = new Subject<KeyboardEvent>();
  public keyEventObs: Observable<KeyboardEvent> = this.keyEventSubject.asObservable();
  
  constructor() { }

  public distributeKeyPress(keyValue: KeyboardEvent): void {
    this.keyEventSubject.next(keyValue);
  }
}
