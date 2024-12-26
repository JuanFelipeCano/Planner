import { FormControl } from '@angular/forms';

interface DatePickerLabels {
  date: string;
  backBtn: string;
  nextBtn: string;
  monthsBtn: string;
}

export interface DatePickerConfig {
  control: FormControl;
  months: string[];
  days: string[];
  labels: DatePickerLabels;
}
