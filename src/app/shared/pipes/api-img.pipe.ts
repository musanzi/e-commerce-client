import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'environments/environment';

@Pipe({
  name: 'apiIMG'
})
export class ApiImgPipe implements PipeTransform {
  transform(value: object, key: string): string {
    const apiUrl = environment.apiUrl;
    const images = {
      user: value['profile']
        ? `${apiUrl}uploads/profiles/${value['profile']}`
        : (value['google_image'] ?? '/images/avatar.webp'),
      product: value['images'][0] ? `${apiUrl}uploads/solutions/${value['images'][0]}` : '/images/default-product.webp'
    };
    return images[key];
  }
}
