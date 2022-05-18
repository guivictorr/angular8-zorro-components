import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";
import { BnModalPageComponent } from "./bn-modal-page.component";
import { BnTablePageComponent } from "./bn-table-page.component";

@NgModule({
  imports: [CommonModule, FormsModule, ComponentsModule],
  exports: [BnTablePageComponent, BnModalPageComponent],
  declarations: [BnTablePageComponent, BnModalPageComponent],
  providers: [],
})
export class PagesModule {}
