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
      solution: value['image'] ? `${apiUrl}uploads/solutions/${value['image']}` : '/images/no-img.png',
      call: value['image'] ? `${apiUrl}uploads/uploads/calls/covers/${value['image']}` : '/images/no-img.png'
    };
    return images[key];
  }
}
