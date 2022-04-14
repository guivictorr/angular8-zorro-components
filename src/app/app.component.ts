import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  title = "angular8-nested-table";
  data = Array.from({ length: 26 }, (_, i) => ({
    estado: `Estado ${i + 1}`,
    quantidade_problemas: Math.floor(Math.random() * 1000),
    clientes_afetados: Math.floor(Math.random() * 1000),
    cidades: Math.floor(Math.random() * 1000),
    children: Array.from({ length: 5 }, (_, j) => ({
      cidade: `Cidade ${i + 1}`,
      quantidade_problemas: Math.floor(Math.random() * 1000),
      clientes_afetados: Math.floor(Math.random() * 1000),
    })),
  }));

  sort(event: Event) {
    console.log(event);
  }
}
