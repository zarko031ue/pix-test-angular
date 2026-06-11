import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./user-card.component.html",
})
export class UserCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) role!: string;
  @Input() avatarUrl: string | null = null;
  @Input() email: string | null = null;
  @Input() isOnline = false;
  @Output() messageUser = new EventEmitter<void>();
}
