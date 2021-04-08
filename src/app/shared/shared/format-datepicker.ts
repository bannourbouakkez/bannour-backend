
import { Injectable } from '@angular/core';
import {  NativeDateAdapter } from '@angular/material/core';
import { MatDateFormats } from '@angular/material/core';

/*
@Injectable({
  providedIn: 'root'
})
*/

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  

  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      let day: string = date.getDate().toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
    return date.toDateString();
  }
}
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};


/*
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from "@angular/material/core";
import * as moment from 'moment';

export class AppDateAdapter extends NativeDateAdapter {

parse(value: any): Date | null {
  if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
    const str = value.split('/');
    const year = Number(str[2]);
    const month = Number(str[1]) - 1;
    const date = Number(str[0]);
    return new Date(Date.UTC(year, month, date));
  }
  const timestamp = typeof value === 'number' ? value : Date.parse(value);
  return isNaN(timestamp) ? null : new Date(timestamp);
}

createDate(year: number, month: number, date: number): Date {
  return new Date(Date.UTC(year, month, date));
}

format(date: Date, displayFormat: Object): string {
  let now = moment();
  if (displayFormat === 'input') {
    let day: string = date.getUTCDate().toString();
    day = +day < 10 ? '0' + day : day;
    let month: string = (date.getUTCMonth() + 1).toString();
    month = +month < 10 ? '0' + month : month;
    let year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;

  }
  // new Date(date.toDateString()).getUTCDate(); 
  return date.toDateString();

}

private _to2digit(n: number) {
 return (n);
 //return ('00' + n).slice(-2);
} 
}

export const APP_DATE_FORMATS =
{
parse: {
 dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
},
display: {
 // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
 dateInput: 'input',
 // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
 monthYearLabel: 'inputMonth',
 dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
 monthYearA11yLabel: {year: 'numeric', month: 'long'},
}
}

*/

