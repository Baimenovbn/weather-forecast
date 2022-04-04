import {IColumn} from '../models/interfaces/column.interface';
import {EHourlyHeaders} from '../models/enums/hourly-headers.enum';

export const hourlyCols: IColumn[] = [
  {
    id: 'city',
    label: 'City Name'
  },
  {
    id: EHourlyHeaders.THREE,
    label: '03:00'
  },
  {
    id: EHourlyHeaders.SIX,
    label: '06:00'
  },
  {
    id: EHourlyHeaders.NINE,
    label: '09:00'
  },
  {
    id: EHourlyHeaders.TWELVE,
    label: '12:00'
  },
  {
    id: EHourlyHeaders.FIFTEEN,
    label: '15:00'
  },
  {
    id: EHourlyHeaders.EIGHTEEN,
    label: '18:00'
  },
  {
    id: EHourlyHeaders.TWENTY_ONE,
    label: '21:00'
  },
  {
    id: EHourlyHeaders.TWENTY_FOUR,
    label: '24:00'
  },
];
