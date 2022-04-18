import { Component, Input } from "@angular/core";

@Component({
  selector: "bn-table",
  templateUrl: "bn-table.component.html",
  styles: [
    `
      :host {
        display: block;
        overflow-y: auto;
      }
    `,
  ],
  host: {
    "[style.height]": "bnHeight",
  },
})
export class BnTableComponent<T = any> {
  @Input() bnData?: T[];
  @Input() bnHeight?: string;
}
