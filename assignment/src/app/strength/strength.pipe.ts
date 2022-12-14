import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Academics'
})
export class Academics implements PipeTransform {
  transform(value: number): string {
    if(value >= 70) {
      return value +"(Distinction)";
    } 
    else if(value >= 60) {
      return value +"(First Class)";
    }
    else if(value >= 50) {
      return value +"(Second Class)";
    }
    else if(value >= 40) {
      return value +"(Pass)";
    }   
    else {
      return value +"(Fail)";
    }
  }
}
