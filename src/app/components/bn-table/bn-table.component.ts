import { Component, ElementRef, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { InputBoolean } from "ng-zorro-antd";

@Component({
  selector: "bn-table",
  templateUrl: "bn-table.component.html",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  host: {
    "[style.height]": "bnHeight",
    "[style.overflow]": "loading ? 'hidden' : 'auto'",
  },
})
export class BnTableComponent<T = any> {
  @Input() bnData?: T[];
  @Input() bnHeight?: string;
  @Input() @InputBoolean() loading = false;
  @Output() bnScrollEnd = new EventEmitter();
  constructor(private elementRef: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener("scroll", () => {
      const { scrollTop, clientHeight, scrollHeight } =
        this.elementRef.nativeElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.bnScrollEnd.emit("teste");
      }
    });
  }
}
