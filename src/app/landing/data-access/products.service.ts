import { inject, Injectable } from '@angular/core';
import { APIService } from 'app/shared/services/api/api.service';
import { IAPIResponse } from 'app/shared/services/api/types/api-response.type';
import { IProduct } from 'app/shared/utils/types/models.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  #apiService = inject(APIService);

  getProducts(): Observable<IAPIResponse<IProduct[]>> {
    return this.#apiService.get('products');
  }
}
