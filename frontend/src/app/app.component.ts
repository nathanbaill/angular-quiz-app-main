import { Component } from '@angular/core';
import {takeWhile, tap, timer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz app';
  counter = 100;
  hasExecuted = false;

  ngOnInit(): void {
    if (!this.hasExecuted)
      timer(1000, 1000) //Initial delay 1 seconds and interval countdown also 1 second
        .pipe(
          takeWhile( () => this.counter > 0 ),
          tap(() => this.counter -= 1)
        )

        .subscribe( () => {
          if (this.counter === 0) {
            //add you more code
            document.location.href="http://localhost:4200/play";
          }

        } );
    this.hasExecuted;
  }
}
