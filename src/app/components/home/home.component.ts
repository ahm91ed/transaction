import { DataInterface } from 'src/app/shared/interface/data-interface';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  term:string = "" ;
  amountTerm:string = "";
  customersName:DataInterface[] = [] ;
  transactionData:DataInterface[] = [] ;


 

constructor ( private _DataServiceService: DataServiceService   ){ 
 }

ngOnInit(): void {

  

  this.customersName =  this._DataServiceService.customers ;

  this.transactionData =  this._DataServiceService.transactions ;
  

  
}




  
   

}
