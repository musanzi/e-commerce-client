import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from 'app/landing/data-access/products.service';
import { IAPIResponse } from 'app/shared/services/api/types/api-response.type';
import { IProduct } from 'app/shared/utils/types/models.type';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../../ui/product-card-skeleton/product-card-skeleton.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, PaginatorModule, ProductCardSkeletonComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  #productsService = inject(ProductsService);
  products$: Observable<IAPIResponse<IProduct[]>>;
  first = 0;
  rows = 10;

  ngOnInit(): void {
    this.products$ = this.#productsService.getProducts();
  }

  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
