import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { InputBoolean } from "ng-zorro-antd";
import { Subject } from "rxjs";

@Component({
  selector: "th",
  templateUrl: "bn-th.component.html",
  host: {
    "[class.table-sort-on]": "bnSort !== null",
  },
})
export class BnThComponent implements OnDestroy {
  private destroy$ = new Subject();

  @Input() bnAlign: "center" | "end" | "start";
  @Input() bnSortKey: string;
  @Input() bnSort: "ascend" | "descend" | null = null;
  @Input() @InputBoolean() bnShowSort = false;
  @Output() bnSortChange = new EventEmitter<{
    key: string;
    value: string;
  }>();

  public updateSortValue() {
    if (!this.bnShowSort) {
      return;
    }

    if (this.bnSort === "ascend") {
      this.setSortValue("descend");
    } else if (this.bnSort === "descend") {
      this.setSortValue(null);
    } else {
      this.setSortValue("ascend");
    }
  }

  public setSortValue(value: "ascend" | "descend" | null) {
    this.bnSort = value;
    this.bnSortChange.emit({
      key: this.bnSortKey,
      value: this.bnSort,
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
