import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent  {


    

    linechart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'transaction data'
      },
      credits: {
        enabled: false
      },
      
      series: [{
        name: 'transaction amount',
        data: [
            [ 'ahmed ali' , 1000 , 2000 ],
            ['aya elsayed', 550, 1300 ],
            ['mina adel', 500, 1250],
            ['sarah reda', 750, 0],
            ['mohamed sayed', 875, 2500],
           
        

        ],
   
     
        borderRadius: 3,
        colorByPoint: true
    } as any]



  });



}
