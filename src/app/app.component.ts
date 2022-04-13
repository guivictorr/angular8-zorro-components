import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "angular8-nested-table";
  data = [
    {
      nome: "Jorge",
      sobrenome: "Paulo",
      idade: "30",
      expand: false,
    },
  ];
}
