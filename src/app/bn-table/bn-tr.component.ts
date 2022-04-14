import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
} from "@angular/core";
import { merge, Subject } from "rxjs";
import { startWith, switchMap, takeUntil } from "rxjs/operators";
import { BnTdComponent } from "./bn-td.component";

@Component({
  selector: "tr",
  templateUrl: "bn-tr.component.html",
})
export class BnTrComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  @ContentChildren(BnTdComponent, { descendants: true })
  listOfBnTdComponent: QueryList<BnTdComponent>;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.listOfBnTdComponent.changes
      .pipe(
        startWith(true),
        switchMap(() => {
          return merge<boolean>(
            ...this.listOfBnTdComponent.map((td) => td.bnExpandChange)
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((expand) => {
        if (expand) {
          this.renderer.addClass(
            this.elementRef.nativeElement,
            "bn-components-is-expanded"
          );
        } else {
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            "bn-components-is-expanded"
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
