import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  d = 1;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  dmax = 50;
  min = -20;
  dmin = 0;
  showTicks = true;
  step = 0.25;
  thumbLabel = true;
  f = 0; // 0.25 steps (-20 to +20)
  vertical = true;
  private _tickInterval = 1;

  onChangeVertexDistance(event) {
    this.f = event.value;
  }

  onChangeDiopters(event) {
    this.d = event.value;
  }

  mm(): number {
    // Formula: mm = 337.5 / X, where X is diopters.
    return 337.5 / this.d;
  }

  // https://en.m.wikipedia.org/wiki/Vertex_distance?wprov=sfti1
  fc(x: number): number {
    // TODO(MGP): Round up or down to the nearest quarter.
    return this.f - (this.f / (1 - x * this.f));
  }
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
}

