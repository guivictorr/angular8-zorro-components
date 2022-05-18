import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from "@angular/core";
import { InputBoolean } from "ng-zorro-antd";

@Component({
  selector: "bn-modal",
  templateUrl: "bn-modal.component.html",
  styleUrls: ["./bn-modal.component.less"],
})
export class BnModalComponent {
  @Input() title?: string | TemplateRef<void> = "Title";
  @Input() content?: string | TemplateRef<void> = "Content";
  @Input() okButtonText?: string = "Confirmar";
  @Input() extraButtons?: TemplateRef<void> = null;
  @Input() @InputBoolean() backButton?: boolean;
  @Input() bnContent?: TemplateRef<void>;
  @Input() bnWidth?: number | string = 500;

  @Input() isVisible = true;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() bnConfirm = new EventEmitter<void>();
  @Output() bnBack = new EventEmitter<void>();

  public handleBack() {
    this.bnBack.emit();
  }

  public handleConfirm() {
    this.bnConfirm.emit();
  }

  public handleCancel() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
