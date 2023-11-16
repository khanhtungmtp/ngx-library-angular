import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  EventEmitter,
  Output,
  forwardRef,
  ChangeDetectorRef,
  KeyValueDiffer,
  KeyValueDiffers,
  DoCheck,
  OnDestroy,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
declare var $: any;

import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';

@Directive({
  selector: '[a2e-datetimepicker]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerDirective),
      multi: true
    }
  ]
})
export class DateTimePickerDirective implements OnInit, OnDestroy, DoCheck, ControlValueAccessor {

  _value: moment.Moment;
  private _options: datetimepicker.SetOptions = {};
  @Input() set options(value) {
    if (value !== null) {
      this._options = value;
    }
  }
  get options(): datetimepicker.SetOptions {
    return this._options;
  }
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  datepicker: datetimepicker.Datetimepicker;
  private dpinitialized: boolean;

  private dpElement;
  private optionsDiffer: KeyValueDiffer<string, any>;
  private _onTouched: any = () => { };
  private _onChange: any = () => { };

  constructor(
    private changeDetector: ChangeDetectorRef,
    protected el: ElementRef,
    private differs: KeyValueDiffers
  ) {
    this.dpinitialized = false;
    const $parent = $(el.nativeElement.parentNode);
    this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    // Initialize optionsDiffer
    this.optionsDiffer = differs.find({}).create();
  }

  @HostListener('blur') onBlur() {
    this._onTouched();
  }

  get value() {
    return this._value || null;
  }

  set value(val) {
    this._value = val;
    this._onChange(val);
    if (val) {
      this._onTouched();
    }
    this.changeDetector.markForCheck();
  }

  writeValue(value) {
    if (!value) {
      this._value = null;
    } else {
      this._value = value;
    }
    this.setDpValue(this._value);
  }

  registerOnChange(fn) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this._onTouched = fn;
  }

  private setDpValue(val) {
    if (!this.dpinitialized || !this.datepicker) {
      return;
    }
    if (val) {
      this.datepicker.date(this.value);
    } else {
      this.datepicker.clear();
    }
  }


  setDisabledState(isDisabled: boolean): void {
    if (this.datepicker) {
      if (isDisabled) {
        this.datepicker.disable();
      } else {
        this.datepicker.enable();
      }
    }
  }

  ngOnInit(): void {
    this.dpinitialized = true;
    this.dpElement.datetimepicker(this.options);
    this.datepicker = this.dpElement.data('DateTimePicker');
    if (this.datepicker) {
      this.datepicker.date(this.value);
    }
  }

  ngDoCheck() {
    if (this.dpinitialized && this.datepicker) {
      const changes = this.optionsDiffer.diff(this.options);
      if (changes) {
        $.map(this.options, (value, key) => {
          this.datepicker[key](value);
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (this.datepicker) {
      this.datepicker.destroy();
    }
  }
}
