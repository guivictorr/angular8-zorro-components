import { Component } from "@angular/core";

@Component({
  selector: "bn-modal-page",
  template: `<button type="button" (click)="open()">Open modal</button
    ><bn-modal
      [(isVisible)]="isVisible"
      backButton
      [bnContent]="test"
    ></bn-modal>`,
})
export class BnModalPageComponent {
  isVisible = false;
  test = "teste".repeat(100);

  open() {
    this.isVisible = true;
  }
}
