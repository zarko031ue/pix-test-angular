import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() variant: "primary" | "outline" | "ghost" | "danger" = "primary";
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() loading = false;
  @Input() disabled = false;
  @Input() label: string | null = null;
}
