import { Component, Input, Output, EventEmitter } from "@angular/core";
import { InputBoolean } from "ng-zorro-antd";

@Component({
  selector: "td",
  templateUrl: "bn-td.component.html",
  host: {
    "[class.bn-components-is-expanded]": "bnExpand",
    "[style.text-align]": "bnAlign",
  },
})
export class BnTdComponent {
  @Input() bnAlign: "left" | "right" | "center";
  @Input() @InputBoolean() bnExpand = false;
  @Input() @InputBoolean() bnShowExpand = false;
  @Output() bnExpandChange = new EventEmitter<boolean>();

  public expandChange(event: Event) {
    event.stopPropagation();
    this.bnExpand = !this.bnExpand;
    this.bnExpandChange.emit(this.bnExpand);
  }
}
