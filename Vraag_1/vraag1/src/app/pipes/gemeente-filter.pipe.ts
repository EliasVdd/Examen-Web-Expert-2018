import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gemeenteFilter'
})
export class GemeenteFilterPipe implements PipeTransform {

  transform(array, zoekterm): any {
    if (zoekterm === 'all') {
      return array;
    }

    return array.filter((item) => item.gemeente.includes(zoekterm));
  }

}
