import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-pricing-card",
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./pricing-card.component.html",
  styleUrls: ["./pricing-card.component.css"],
})
export class PricingCardComponent {
  @Input({ required: true }) tier!: string;
  @Input({ required: true }) price!: number;
  @Input() period: "month" | "year" = "month";
  @Input() description: string | null = null;
  @Input() features: string[] = [];
  @Input() ctaLabel = "Get started";
  @Input() highlighted = false;
  @Output() selectTier = new EventEmitter<void>();
}
