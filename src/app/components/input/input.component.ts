import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./input.component.html",
})
export class InputComponent {
  @Input() label: string | null = null;
  @Input() placeholder = "";
  @Input() type: "text" | "email" | "password" | "number" | "search" = "text";
  @Input() error: string | null = null;
  @Input() value: string | number = "";
  @Input() disabled = false;
}
