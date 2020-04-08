import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;
  countOnesPlace$: Observable<number>;

  constructor() {
    this.count$ = interval(1000);
    this.countOnesPlace$ = this.count$.pipe(map(count => count % 10 ));
  }
}
