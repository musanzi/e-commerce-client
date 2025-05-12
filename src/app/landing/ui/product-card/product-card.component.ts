import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProduct } from 'app/shared/utils/types/models.type';
import { ApiImgPipe } from '../../../shared/pipes/api-img.pipe';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ApiImgPipe],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  product = input.required<IProduct>();
}
