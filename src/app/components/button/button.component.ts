import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() variant: "primary" | "outline" | "ghost" | "danger" = "primary";
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() loading = false;
  @Input() disabled = false;
  @Input() label: string | null = null;

  private readonly variantClasses: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    outline: "bg-transparent border-line text-ink hover:bg-surface",
    ghost: "bg-transparent text-ink hover:bg-surface",
    danger: "bg-danger text-white",
  };

  private readonly sizeClasses: Record<string, string> = {
    sm: "h-8 px-2 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-lg",
  };

  get variantClass(): string {
    return this.variantClasses[this.variant];
  }

  get sizeClass(): string {
    return this.sizeClasses[this.size];
  }
}
