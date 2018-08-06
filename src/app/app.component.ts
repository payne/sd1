import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = -20;
  showTicks = true;
  step = 0.25;
  thumbLabel = true;
  f = 0; // 0.25 steps (-20 to +20)
  vertical = true;

  onChange(event) {
    this.f = event.value;
  }

  // https://en.m.wikipedia.org/wiki/Vertex_distance?wprov=sfti1
  fc(x:number):number {
    return this.f / (1 - x * this.f);
  }
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

}
