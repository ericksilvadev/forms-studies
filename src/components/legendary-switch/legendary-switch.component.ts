import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-legendary-switch',
  imports: [],
  templateUrl: './legendary-switch.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LegendarySwitchComponent),
      multi: true,
    }
  ]
})
export class LegendarySwitchComponent implements ControlValueAccessor {

  value = false;
  onChange = (value: boolean) => {};
  onTouched = () => {};
  disabled = signal(false);

  toggleValue() {
    if (this.disabled()) return;

    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(isLegendary: boolean): void {
    this.value = isLegendary;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
