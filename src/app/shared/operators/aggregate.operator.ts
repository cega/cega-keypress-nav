import { Observable, Subscriber } from "rxjs";

// Type T => KeyboardEvent here

// https://torsten-muller.dev/rxjs/create-new-rx-js-operator-aggregating-events-for-a-length-of-time/

export function aggregate<T>(
  allowedTimeForNextEventInMs: number
): (source: Observable<T>) => Observable<T[]> {
  let aggregatedEventValues: T[] = [];
  let timerRef = null;

  const handleTimeout = (subscriber: Subscriber<T[]>): TimerHandler => {
    return (): void => {
      const keyEventsCopy = aggregatedEventValues.slice(0);
      aggregatedEventValues = [];
      subscriber.next(keyEventsCopy);
    };
  };

  return function(source: Observable<T>): Observable<T[]> {
    return new Observable((subscriber: Subscriber<T[]>) => {
      source.subscribe({
        next(value) {
          if (value !== undefined && value !== null) {
            if (timerRef) clearTimeout(timerRef);
            timerRef = setTimeout(
              handleTimeout(subscriber),
              allowedTimeForNextEventInMs
            );
            aggregatedEventValues.push(value);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        }
      });
    });
  };
}
