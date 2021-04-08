import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
//import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';




import {OwlDateTimeModule,OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MomentDateTimeAdapter , OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS } from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';

export const MY_CUSTOM_FORMATS = {
  parseInput: 'DD/MM/YYYY',
  fullPickerInput: 'DD/MM/YYYY HH:MM', //
  datePickerInput: 'DD/MM/YYYY',
  timePickerInput: 'hh:mm a', // hh:mm a
  monthYearLabel: 'MMM-YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM-YYYY'
};

import { AppDateAdapter, APP_DATE_FORMATS } from './format-datepicker';
//2//import {DateAdapter} from '@angular/material/core';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
//import {OwlMomentDateTimeModule} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';


export const MY_NATIVE_FORMATS = {
  fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'},
  datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
  timePickerInput: {hour: 'numeric', minute: 'numeric'},
  monthYearLabel: {year: 'numeric', month: 'short'},
  dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
  monthYearA11yLabel: {year: 'numeric', month: 'long'},
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ],
  providers:[
    
    
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE] },
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
    
    //{ provide: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    
    //1//{provide: OWL_DATE_TIME_LOCALE, useValue: 'en-US'}
    //2//{provide: DateAdapter, useClass: AppDateAdapter},

    //{provide: DateAdapter, useClass: AppDateAdapter},
    //{provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
    
    
    //,{provide: OWL_DATE_TIME_LOCALE, useValue: 'in'}
    //,{provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS},




  ],
  exports:[MatStepperModule,MatDatepickerModule,MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, MatMomentDateModule,MatIconModule,MatChipsModule,
    
    //,MatInputModule,
    FormsModule,ReactiveFormsModule,

    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    OwlMomentDateTimeModule
  
  
  
  ]
})
export class SharedModule { }
