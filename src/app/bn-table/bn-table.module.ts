import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NzIconModule } from "ng-zorro-antd";

import { BnTableComponent } from "./bn-table.component";
import { BnTdComponent } from "./bn-td.component";
import { BnTrDirective } from "./bn-tr.directive";
import { BnThComponent } from "./bn-th.component";
import { BnTheadComponent } from "./bn-thead.component";

@NgModule({
  imports: [CommonModule, FormsModule, NzIconModule],
  exports: [
    BnTableComponent,
    BnTdComponent,
    BnTrDirective,
    BnThComponent,
    BnTheadComponent,
  ],
  declarations: [
    BnTableComponent,
    BnTdComponent,
    BnTrDirective,
    BnThComponent,
    BnTheadComponent,
  ],
  providers: [],
})
export class BnTableModule {}
