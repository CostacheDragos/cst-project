import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TripsDashboardComponent } from './components/trips-dashboard/trips-dashboard.component';

//ng zorro

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';

//bonus library used for search
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddEditTripModalComponent } from './components/add-edit-trip-modal/add-edit-trip-modal.component';

@NgModule({
  declarations: [
    TripCardComponent,
    MainPageComponent,
    TripsDashboardComponent,
    AddEditTripModalComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,

    //ngZorro
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzPageHeaderModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
  ],
})
export class MainModule {}
