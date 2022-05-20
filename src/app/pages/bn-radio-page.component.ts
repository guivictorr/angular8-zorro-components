import { Component } from "@angular/core";

@Component({
  selector: "bn-radio-page",
  template: `
    <bn-radio-group (bnRadioChange)="handleChange($event)">
      <bn-radio style="margin-bottom: 10px;" bnKey="1">
        <strong>Titulo muito doido</strong>
      </bn-radio>
      <hr />
      <bn-radio bnKey="2">Teste 2</bn-radio>
    </bn-radio-group>
  `,
})
export class BnRadioPageComponent {
  handleChange(event) {
    console.log(event);
  }
}
