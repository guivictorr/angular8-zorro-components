import { Component } from "@angular/core";

@Component({
  selector: "bn-table-page",
  template: `
    <bn-table #tableComponent [bnData]="data" [loading]="false">
      <thead (bnSortChange)="sort($event)">
        <tr>
          <th bnShowSort bnSortKey="name">Estado</th>
          <th bnShowSort bnSortKey="lastname" bnJustify="center">
            Quantidade de problemas
          </th>
          <th bnJustify="center">Clientes afetados</th>
          <th>Cidades</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of tableComponent.bnData">
          <tr>
            <td>{{ data.estado }}</td>
            <td bnAlign="center">{{ data.quantidade_problemas }}</td>
            <td bnAlign="center">{{ data.clientes_afetados }}</td>
            <td [bnShowExpand]="data.children" [(bnExpand)]="data.expand">
              {{ data.cidades }}
            </td>
          </tr>
          <tr *ngIf="data.expand">
            <td colspan="4">
              <bn-table bnHeight="344px" (bnScrollEnd)="scrollEnd()">
                <thead>
                  <tr>
                    <th>Cidade</th>
                    <th>Quantidade de problemas</th>
                    <th>Clientes afetados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let child of data.children">
                    <td>{{ child.cidade }}</td>
                    <td>{{ child.quantidade_problemas }}</td>
                    <td>{{ child.clientes_afetados }}</td>
                  </tr>
                </tbody>
              </bn-table>
            </td>
          </tr>
        </ng-container>
      </tbody>
    </bn-table>
  `,
})
export class BnTablePageComponent {
  title = "angular8-nested-table";
  data = Array.from({ length: 26 }, (_, i) => ({
    estado: `Estado ${i + 1}`,
    quantidade_problemas: Math.floor(Math.random() * 1000),
    clientes_afetados: Math.floor(Math.random() * 1000),
    cidades: Math.floor(Math.random() * 1000),
    children: Array.from({ length: 15 }, (_, j) => ({
      cidade: `Cidade ${i + 1}`,
      quantidade_problemas: Math.floor(Math.random() * 1000),
      clientes_afetados: Math.floor(Math.random() * 1000),
    })),
  }));

  sort(event: Event) {
    console.log(event);
  }

  scrollEnd() {
    console.log("scroll end");
  }
}
