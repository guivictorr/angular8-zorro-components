import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";
import { toBoolean } from "ng-zorro-antd/core";

@Directive({ selector: "tr" })
export class BnTrDirective {
  @Input() set bnExpand(value: boolean) {
    if (toBoolean(value)) {
      this.renderer.removeStyle(this.elementRef.nativeElement, "display");
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
