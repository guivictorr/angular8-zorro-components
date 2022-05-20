import { NgModule } from "@angular/core";
import { BnRadioGroupComponent } from "./bn-radio-group.component";

import { BnRadioComponent } from "./bn-radio.component";

@NgModule({
  imports: [],
  exports: [BnRadioComponent, BnRadioGroupComponent],
  declarations: [BnRadioComponent, BnRadioGroupComponent],
  providers: [],
})
export class BnRadioModule {}
