
import {ChangeDetectionStrategy, Component, ViewChild , OnInit , EventEmitter, Output, Input} from '@angular/core';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import moment from 'moment';

@Component({
  selector: 'app-pick-dates',
  templateUrl: './pick-dates.component.html',
  styleUrls: ['./pick-dates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickDatesComponent implements OnInit {
  
  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  @Input() minDate:Date;  
  @Input() maxDate:Date;  
  @Input() ldates:any[];

  //minDate = null;//new Date(2021, 2, 15);
  //maxDate = null;//new Date(2021, 3, 15);

  ngOnInit(){
    this.model.splice(0, 1);
    this.pushDates();
  }

  
  pushDates(){
    for(let i=0;i<this.ldates.length;i++){ 
      let date = this.ldates[i].date;
      this.model.push(date);
    }
  }

  ngOnChanges() {
    this.removeAll(); 
  }

  public CLOSE_ON_SELECTED = false;
  public init = new Date();
  public resetModel = new Date(0);
  public model = [
    new Date('6/17/1998')
  ];

  /*
    new Date('7/15/1966'),
    new Date('3/23/1968'),
    new Date('7/4/1992'),
    new Date('1/25/1994'),
    new Date('6/17/1998')
  */

    
  @ViewChild('picker', { static: true }) _picker: MatDatepicker<Date>;

  public dateClass = (date: Date) => {
    if (this._findDate(date) !== -1) {
      return [ 'selected' ];
    }
    return [ ];
  }

  public dateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      const date = event.value;
      const index = this._findDate(date);
      if (index === -1) {
        //if(this.model.length>0){
         this.model.push(date);
        //}
      } else {
        this.model.splice(index, 1)
      }
      this.resetModel = new Date(0);
      if (!this.CLOSE_ON_SELECTED) {
        const closeFn = this._picker.close;
        this._picker.close = () => { };
        this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
        setTimeout(() => {
          this._picker.close = closeFn;
        });
      }
    }
    this.Action();
  }

  public remove(date: Date): void {
    const index = this._findDate(date);
    this.model.splice(index, 1)
  }

  removeAll(){
    this.model=[];
  }

  private _findDate(date: Date): number {
    return this.model.map((m) => +m).indexOf(+date);
  }

  Action(){ this.action.emit(this.model); }

  alert(x:any){console.log(x);}

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license 
https://stackblitz.com/edit/angular-material-multiple-dates?file=src%2Fapp%2Fmaterial-module.ts 
*/
