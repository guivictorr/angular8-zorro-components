import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
} from "@angular/core";
import { merge, Subject } from "rxjs";
import { startWith, switchMap, takeUntil } from "rxjs/operators";
import { BnThComponent } from "./bn-th.component";

@Component({
  selector: "thead",
  templateUrl: "bn-thead.component.html",
  styles: [
    `
      :host {
        position: sticky;
        top: 0;
        background: white;
      }
    `,
  ],
})
export class BnTheadComponent implements OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();

  @ContentChildren(BnThComponent, { descendants: true })
  listOfBnThComponent: QueryList<BnThComponent>;

  @Output() bnSortChange = new EventEmitter<{ key: string; value: string }>();

  ngAfterViewInit(): void {
    this.listOfBnThComponent.changes
      .pipe(
        startWith(true),
        switchMap(() =>
          merge<{ key: string; value: string }>(
            ...this.listOfBnThComponent.map((th) => th.bnSortChange)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.bnSortChange.emit(data);

        this.listOfBnThComponent.forEach((th) => {
          th.bnSort = th.bnSortKey === data.key ? th.bnSort : null;
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
