import { Component, Input, Output, EventEmitter } from "@angular/core";
import { InputBoolean } from "ng-zorro-antd";

@Component({
  selector: "td",
  templateUrl: "bn-td.component.html",
})
export class BnTdComponent {
  @Input() @InputBoolean() bnExpand = false;
  @Input() @InputBoolean() bnShowExpand = false;
  @Output() bnExpandChange = new EventEmitter<boolean>();

  public expandChange(event: Event) {
    event.stopPropagation();
    console.log("foi");
    this.bnExpand = !this.bnExpand;
    this.bnExpandChange.emit(this.bnExpand);
  }
}
