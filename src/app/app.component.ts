import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonComponent, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 class="text-2xl text-ink">Pix Test Angular</h1>
      <app-button variant="primary">Click me</app-button>
      <app-product-card
        title="Sample Product"
        [price]="29.99"
        imageUrl="https://placehold.co/300x200"
      ></app-product-card>
    </main>
  `,
})
export class AppComponent {}
