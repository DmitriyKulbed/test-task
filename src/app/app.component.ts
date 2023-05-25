import { Component } from '@angular/core';
import { Subject, catchError, delay, of, share, switchMap } from 'rxjs';
import { NumberService } from './number.service';
import { STREAM1_DELAY, STREAM2_DELAY, STREAM3_DELAY } from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private numberService: NumberService) {}

  private getValue$ = new Subject<void>();

  private response$ = this.getValue$.pipe(
    switchMap(() =>
      this.numberService.getNumber().pipe(catchError(() => of(0)))
    ),
    share()
  );

  public stream1$ = this.response$.pipe(delay(STREAM1_DELAY));
  public stream2$ = this.response$.pipe(delay(STREAM2_DELAY));
  public stream3$ = this.response$.pipe(delay(STREAM3_DELAY));

  onUpdate(): void {
    this.getValue$.next();
  }
}
