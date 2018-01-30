import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nanPipe'
})
export class NanPipePipe implements PipeTransform {

  transform(value: Number): Number {
    return (isNaN(value.valueOf()) || (value == null)) ? 0 : value;
  }

}
