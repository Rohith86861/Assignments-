import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure:true
})
export class PurePipe implements PipeTransform {
  constructor(){
    console.log("Pure pipe is created...")
  }

  transform(value: number, ...args: any[]): number {
    console.log('Purepipe: transform() is called, value'+value);
    return value;
  }

}
