import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Month } from '../models/models';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {
  @Input() month: Month;

  constructor(private http: HttpClient) {
    this.month = {
      monthYear: '',
      monthNumber: '',
      tables: [],
      calculations: [],
      isSaved:false
    }
  }
}
