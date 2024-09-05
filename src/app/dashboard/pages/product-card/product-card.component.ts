import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';

import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // @Input({
  //   required: true,
  // }) product!: Product;

  // Nueva forma de definir inputs
  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  // Nueva forma de definir outputs
  public onIncrementQuantity = output<number>();

  public logProductModified = effect(() => {
    console.log('Product modified:', this.product().name);
  });

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1 > 10 ? 10 : this.product().quantity + 1);
  }

  public decrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity - 1 < 0 ? 0 : this.product().quantity - 1);
  }
}
