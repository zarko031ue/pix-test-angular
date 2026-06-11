import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) imageUrl!: string;
  @Input() rating = 0;
  @Input() inStock = true;
  @Output() addToCart = new EventEmitter<void>();
}
