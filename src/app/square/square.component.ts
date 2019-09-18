import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton outline="false" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value === 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="danger" *ngIf="value === 'O'">
      {{ value }}
    </button>
  `,
  styles: [
      `
      button {
        color: black;
        font-size: 3em;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

  constructor() {
  }
}
