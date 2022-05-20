import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
} from "@angular/core";
import { merge, Subject } from "rxjs";
import { startWith, switchMap, takeUntil } from "rxjs/operators";
import { BnRadioComponent } from "./bn-radio.component";

@Component({
  selector: "bn-radio-group",
  template: `<ng-content></ng-content>`,
})
export class BnRadioGroupComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @ContentChildren(BnRadioComponent, { descendants: true })
  listOfBnThComponent: QueryList<BnRadioComponent>;

  @Output() bnRadioChange = new EventEmitter<{ key: string; value: string }>();

  ngAfterViewInit(): void {
    this.listOfBnThComponent.changes
      .pipe(
        startWith(true),
        switchMap(() =>
          merge<{ key: string; value: string }>(
            ...this.listOfBnThComponent.map((radio) => radio.bnClick)
          )
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.bnRadioChange.emit(data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
