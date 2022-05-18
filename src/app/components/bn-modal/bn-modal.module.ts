import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NzModalModule } from "ng-zorro-antd";

import { BnModalComponent } from "./bn-modal.component";

@NgModule({
  imports: [CommonModule, NzModalModule],
  exports: [BnModalComponent],
  declarations: [BnModalComponent],
  providers: [],
})
export class BnModalModule {}
