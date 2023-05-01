import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TripsDashboardComponent } from './components/trips-dashboard/trips-dashboard.component';


@NgModule({
  declarations: [
    TripCardComponent,
    MainPageComponent,
    TripsDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

     //ngZorro
     NzButtonModule,
     NzDropDownModule,
     NzIconModule,
  ]
})
export class MainModule { }
