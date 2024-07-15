import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ChartDataComponent } from './components/chart-data/chart-data.component';

const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full" } ,
  {path : "home" , component : HomeComponent , title : "home" ,
    children: [
      {  path : "chartData" , component : ChartDataComponent   }  ]
   } ,
  {path : "**" , component : NotfoundComponent , title : "notfound" } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
