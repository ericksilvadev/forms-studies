import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-legendary-switch',
  imports: [],
  templateUrl: './legendary-switch.component.html',
})
export class LegendarySwitchComponent {
  value = false;

  toggleValue() {
    this.value = !this.value;
  }
}
