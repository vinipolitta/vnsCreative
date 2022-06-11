import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from '../interfaces/radio-option.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent) ,
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor  {


  @Input() options: RadioOption[];

  value: any;
  onChange: any;

  constructor() {}

  ngOnInit(): void {}

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
    console.log(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void{

  }

}
