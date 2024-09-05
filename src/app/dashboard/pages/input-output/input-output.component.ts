import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal, OnDestroy } from '@angular/core';
import { interval, take, tap } from 'rxjs';

import { ProductCardComponent } from '../product-card/product-card.component';

import { Product } from '@interfaces/product.interface';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ CommonModule, TitleComponent, ProductCardComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input-output.component.html'
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    { id: 1, name: 'Product 1', description: 'Description 1', quantity: 0, price: 100 },
  ]);

  private internalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update(products => [
          ...products,
          { id: products.length + 1, name: `Product ${products.length + 1}`, description: `Description ${products.length + 1}`, quantity: 0, price: 100 }
        ]);
      }),
      take(10)
    )
    .subscribe();

    ngOnDestroy(): void {
      this.internalSubscription.unsubscribe();
    }

    updateQuantity(product: Product, quantity: number): void {
      this.products.update(products => products.map(p => p.id === product.id ? { ...p, quantity } : p));
    }
  }
