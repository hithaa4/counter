import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter';

  count = 0;
  increase() {
    this.count = this.count + 1;
  }
  decrease() {
    this.count = this.count - 1;
  }
  reset() {
    this.count = 0;
  }
}
