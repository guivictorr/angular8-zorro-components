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
      children: [
        {
          nome: "Maria",
          sobrenome: "Antonia",
          idade: "42",
          expand: true,
        },
      ],
    },
    {
      nome: "Jorge",
      sobrenome: "Paulo",
      idade: "30",
      expand: false,
    },
    {
      nome: "Jorge",
      sobrenome: "Paulo",
      idade: "30",
      expand: false,
    },
  ];

  sort(event: Event) {
    console.log(event);
  }
}
