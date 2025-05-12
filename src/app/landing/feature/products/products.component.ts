import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from 'app/landing/data-access/products.service';
import { IAPIResponse } from 'app/shared/services/api/types/api-response.type';
import { IProduct } from 'app/shared/utils/types/models.type';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../../ui/product-card-skeleton/product-card-skeleton.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, ProductCardSkeletonComponent, NgxPaginationModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  #productsService = inject(ProductsService);
  products$: Observable<IAPIResponse<IProduct[]>>;
  currentPage = signal(1);

  ngOnInit(): void {
    this.products$ = this.#productsService.getProducts();
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
