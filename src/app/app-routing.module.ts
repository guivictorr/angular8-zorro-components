import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BnModalPageComponent } from "./pages/bn-modal-page.component";
import { BnTablePageComponent } from "./pages/bn-table-page.component";

const routes: Route[] = [
  { path: "bn-table", component: BnTablePageComponent },
  { path: "bn-modal", component: BnModalPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
