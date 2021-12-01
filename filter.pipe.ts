import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, name: string) {
    if(name === ''){
      return value;
    }

    return value.filter((user:any)=>user.firstName.startsWith(name));
  }

}
