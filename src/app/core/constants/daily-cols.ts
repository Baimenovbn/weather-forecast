import {IColumn} from '../models/interfaces/column.interface';
import {EDailyHeaders} from '../models/enums/daily-headers.enum';

export const dailyCols: IColumn[] = [
  {
    id: 'city',
    label: 'City Name'
  },
  {
    id: EDailyHeaders.MONDAY,
    label: EDailyHeaders.MONDAY
  },
  {
    id: EDailyHeaders.TUESDAY,
    label: EDailyHeaders.TUESDAY,
  },
  {
    id: EDailyHeaders.WEDNESDAY,
    label: EDailyHeaders.WEDNESDAY,
  },
  {
    id: EDailyHeaders.THURSDAY,
    label: EDailyHeaders.THURSDAY,
  },
  {
    id: EDailyHeaders.FRIDAY,
    label: EDailyHeaders.FRIDAY,
  },
  {
    id: EDailyHeaders.SATURDAY,
    label: EDailyHeaders.SATURDAY,
  },
  {
    id: EDailyHeaders.SUNDAY,
    label: EDailyHeaders.SUNDAY,
  },
];
