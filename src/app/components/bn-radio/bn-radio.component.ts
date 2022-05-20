import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "bn-radio",
  templateUrl: "bn-radio.component.html",
  styleUrls: ["bn-radio.component.less"],
})
export class BnRadioComponent {
  @Output() bnClick = new EventEmitter<{
    id: string;
  }>();

  @Input() bnName: string;
  @Input() bnKey: string;

  public handleRadioChange() {
    this.bnClick.emit({
      id: this.bnKey,
    });
  }
}
