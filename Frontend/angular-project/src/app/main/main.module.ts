import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TripsDashboardComponent } from './components/trips-dashboard/trips-dashboard.component';

//ng zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

//bonus library used for search
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [TripCardComponent, MainPageComponent, TripsDashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,

    //ngZorro
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
  ],
})
export class MainModule {}
