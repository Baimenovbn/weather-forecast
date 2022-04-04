import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ValueAccessor} from '../../../core/implementation/value-accessor/value-accessor';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchInputComponent,
      multi: true,
    },
  ]
})
export class SearchInputComponent extends ValueAccessor<string>{
  @Input() placeholder = 'Just start typing your city';
  @Input() maxLength = 70;
  @Input() style = '';
  @Input() withBtn = false;

  @Output() emptyEvent = new EventEmitter<void>();
  @Output() searchClicked = new EventEmitter<string | null>();
  @Output() focused = new EventEmitter<FocusEvent>();

  handleEmpty(): void {
    this.value = '';
    this.onChange('');
    this.emptyEvent.emit();
  }

  onSearchClicked(): void {
    this.searchClicked.emit(this.value);
  }

  onFocus($event: FocusEvent): void {
    this.focused.emit($event);
  }
}
