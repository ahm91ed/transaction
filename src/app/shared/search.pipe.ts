import { DataInterface } from 'src/app/shared/interface/data-interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( customersName:DataInterface[] , term:string ): DataInterface[] {
    return customersName.filter(  (customer)=>customer.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) );
  }

}
