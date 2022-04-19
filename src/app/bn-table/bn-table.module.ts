import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NzSpinModule } from "ng-zorro-antd";

import { BnTableComponent } from "./bn-table.component";
import { BnTdComponent } from "./bn-td.component";
import { BnThComponent } from "./bn-th.component";
import { BnTheadComponent } from "./bn-thead.component";
import { BnTrComponent } from "./bn-tr.component";

@NgModule({
  imports: [CommonModule, FormsModule, NzSpinModule],
  exports: [
    BnTableComponent,
    BnTdComponent,
    BnThComponent,
    BnTheadComponent,
    BnTrComponent,
  ],
  declarations: [
    BnTableComponent,
    BnTdComponent,
    BnThComponent,
    BnTheadComponent,
    BnTrComponent,
  ],
  providers: [],
})
export class BnTableModule {}
