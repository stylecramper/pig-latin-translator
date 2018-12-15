import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatinPipe'
})
export class PiglatinPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
