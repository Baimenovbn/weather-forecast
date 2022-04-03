import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessor<T> implements ControlValueAccessor {
  onChange: any = (_: any) => {
    return void 0;
  };
  onTouch: any = () => {
    return void 0;
  };

  value: T | null | undefined;

  disabled = false;

  inputTouched(): void {
    this.onTouch();
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
