import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SearchPipe } from './shared/search.pipe';
import { FormsModule } from '@angular/forms';
import { AmountPipe } from './shared/amount.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartDataComponent } from './components/chart-data/chart-data.component' ;
import { ChartModule } from 'angular-highcharts';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    SearchPipe,
    AmountPipe,
    ChartDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule ,
    ChartModule

    


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
