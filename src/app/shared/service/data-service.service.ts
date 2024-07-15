import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


   customers:any[] = [

    { id : 1 , name  : "ahmed ali" } ,
    { id : 2 , name  : "aya  elsayed" } ,
    { id : 3 , name  : "mina adel" } ,
    { id : 4 , name  : "sarah reda" } ,
    { id : 5 , name  : "mohamed sayed" } ,
    
    
    ] ;

     transactions:any[] = [

      { id : 1 , customer_id : 1 ,  amount : "1000"     , date : '2022-01-01'  } ,
      { id : 2 , customer_id : 1 ,  amount : "2000"    , date : "2022-01-02"  } ,
      { id : 3 , customer_id : 2 ,  amount : "550"      , date : "2022-01-01"  } ,
      { id : 4 , customer_id : 3 ,  amount : "500 "     , date : "2022-01-01"  } ,
      { id : 5 , customer_id : 2 ,  amount : "1300 "    , date : "2022-01-02"  } ,
      { id : 6 , customer_id : 4 ,  amount : "750"      , date : "2022-01-01"  } ,
      { id : 7 , customer_id : 3 ,  amount : "1250 "    , date : "2022-01-02"  } ,
      { id : 8 , customer_id : 5 ,  amount : "2500 "    , date : "2022-01-01"  } ,
      { id : 9 , customer_id : 5 ,  amount : "875 "     , date : "2022-01-02"  } ,
  
  
  
  ] ;
}
