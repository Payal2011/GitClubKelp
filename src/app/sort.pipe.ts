import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCreatedAt'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    value.sort((a: any, b: any) => {
      if (b.created_at < a.created_at) {
        return -1;
      } else if (b.created_at > a.created_at) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }

}
