import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BnTablePageComponent } from "./pages/bn-table-page.component";

const routes: Route[] = [{ path: "bn-table", component: BnTablePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
