import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(input: String): any {
    var data = ""
    for(var i=0; i<input.length; i++){
      data = input[i]+data
    }
    return data;
  }

}
