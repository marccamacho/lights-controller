import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getKeys'
})
export class GetKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value == undefined) return []
      return Object.keys(value)//.map(key => value[key]);
  }

}
