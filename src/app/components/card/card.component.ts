import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./card.component.html",
})
export class CardComponent {
  @Input() elevated = false;
  @Input() title: string | null = null;
  @Input() description: string | null = null;
}
