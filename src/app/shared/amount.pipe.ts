import { DataInterface } from 'src/app/shared/interface/data-interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform( transactionData:DataInterface[] , amountTerm:string  ): DataInterface[]  {
    return transactionData.filter(   ( item )=> item.amount.includes(amountTerm) )   ;
  }

}
