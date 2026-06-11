import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonComponent, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="app-shell">
      <h1>Pix Test Angular</h1>
      <app-button variant="primary">Click me</app-button>
      <app-product-card
        title="Sample Product"
        [price]="29.99"
        imageUrl="https://placehold.co/300x200"
      ></app-product-card>
    </main>
  `,
  styles: [
    `
      .app-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
      }
      h1 {
        font-size: var(--font-size-xl);
        color: var(--text-primary);
      }
    `,
  ],
})
export class AppComponent {}
