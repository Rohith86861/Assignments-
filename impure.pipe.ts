import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure:false
})
export class ImpurePipe implements PipeTransform {

  constructor(){
    console.log("ImPure pipe is created...")
  }

  transform(value: number, ...args: any[]): number {
    console.log('ImPurepipe: transform() is called, value'+value);
    return value;
  }
}
