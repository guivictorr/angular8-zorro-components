import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NzIconModule } from "ng-zorro-antd";

import { BnTableComponent } from "./bn-table.component";
import { BnTdComponent } from "./bn-td.component";
import { BnTrDirective } from "./bn-tr.directive";

@NgModule({
  imports: [CommonModule, FormsModule, NzIconModule],
  exports: [BnTableComponent, BnTdComponent, BnTrDirective],
  declarations: [BnTableComponent, BnTdComponent, BnTrDirective],
  providers: [],
})
export class BnTableModule {}
