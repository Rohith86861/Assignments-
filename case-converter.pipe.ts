import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseConverter'
})
export class CaseConverterPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(value: string,tempType:string):string{
    
    if(tempType=='testUpper')
    return value.toUpperCase();
    else if(tempType=='testLower')
    return value.toLowerCase();
    else if(tempType=='testCapital')
    return value.substr(0,1).toUpperCase() + value.substr(1);
    return value;
  }

}
