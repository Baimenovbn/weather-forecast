import {Component, Input} from '@angular/core';
import {IColumn} from '../../../../core/models/interfaces/column.interface';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  @Input() cols: IColumn[] = [];
  @Input() rows: { [key: string]: any }[] = [];
}
