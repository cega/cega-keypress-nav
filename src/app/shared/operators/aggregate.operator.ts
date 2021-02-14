import { Observable, Subscriber } from "rxjs";

// Type T => KeyboardEvent here

// https://torsten-muller.dev/rxjs/create-new-rx-js-operator-aggregating-events-for-a-length-of-time/

export function aggregate<T>(
  allowedTimeForNextEventInMs: number,
  limit?: number
): (source: Observable<T>) => Observable<T[]> {
  let aggregatedEventValues: T[] = [];
  let timerRef = null;
  const maxKeypressCount = limit || 5;

  const handleTimeout = (subscriber: Subscriber<T[]>): (() => void) => {
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
            aggregatedEventValues.push(value);
            if (timerRef) clearTimeout(timerRef);
            if (aggregatedEventValues.length < maxKeypressCount) {
              timerRef = setTimeout(
                handleTimeout(subscriber),
                allowedTimeForNextEventInMs
              );
            } else handleTimeout(subscriber)();
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
