import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";
import { BnTablePageComponent } from "./bn-table-page.component";

@NgModule({
  imports: [CommonModule, FormsModule, ComponentsModule],
  exports: [BnTablePageComponent],
  declarations: [BnTablePageComponent],
  providers: [],
})
export class PagesModule {}
