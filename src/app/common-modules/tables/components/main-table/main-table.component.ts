import {Component, Input} from '@angular/core';

export interface IColumn {
  id: string;
  label: string;
}

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  @Input() cols: IColumn[] = [
    {
      id: 'city',
      label: 'City Name'
    },
    {
      id: '03',
      label: '03:00'
    },
    {
      id: '06',
      label: '06:00'
    },
  ];
  @Input() rows: { [key: string]: any }[] = [
    {
      'city': 'London',
      '03': '15*',
      '06': '16*'
    },
    {
      'city': 'New York',
      '03': '25*',
      '06': '46*'
    },
  ];
}
