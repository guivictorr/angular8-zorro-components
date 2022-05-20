import { NgModule } from "@angular/core";
import { BnModalModule } from "./bn-modal/bn-modal.module";
import { BnRadioModule } from "./bn-radio/bn-radio.module";
import { BnTableModule } from "./bn-table/bn-table.module";

@NgModule({
  imports: [],
  exports: [BnTableModule, BnModalModule, BnRadioModule],
  declarations: [],
  providers: [],
})
export class ComponentsModule {}
