import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { IconComponent } from '../icon/icon.component';
import { DatePickerConfig } from './models/date-picker-config.model';
import { SimpleDate } from './models/simple-date.model';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [ CommonModule, IconComponent ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent implements OnInit {

  @Input() public config!: DatePickerConfig;

  public selectedDate: string = '';
  public isOpen!: boolean;
  public areMonthsActive!: boolean;
  public currentDate!: Dayjs;
  public simpleDate!: SimpleDate; // BehaviorSubject
  public selectedDay!: SimpleDate;

  private date!: Dayjs;

  constructor() {
    this.isOpen = false;
    this.areMonthsActive = false;
    this.currentDate = dayjs();
    this.date = dayjs();
    this.simpleDate = { month: 0, day: 0, year: 0 };
  }

  public get daysInMonth(): number[] {
    const year = this.date.year();
    const month = this.date.month();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = this.date.daysInMonth();
    const days: number[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(0);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  }

  public ngOnInit(): void {
    this.updateSimpleDate();
  }

  public toggleMonths(): void {
    this.areMonthsActive = !this.areMonthsActive;
  }

  public toggleDatePicker(): void {
    this.isOpen = !this.isOpen;
    this.areMonthsActive = false;

    if (this.selectedDate && this.selectedDay) {
      const { day, month, year } = this.selectedDay;
      this.date = dayjs(`${ month + 1 }-${ day }-${ year }`, 'MM-DD-YYYY');
      return;
    }

    this.date = dayjs();
    this.updateSimpleDate();
  }

  public nextMonth(): void {
    this.date = this.date.add(1, 'month');
    this.updateSimpleDate();
  }

  public previousMonth(): void {
    this.date = this.date.subtract(1, 'month');
    this.updateSimpleDate();
  }

  public selectDate(day: number): void {
    if (day === 0 || this.isDisabledDay(day)) return;

    this.date = this.date.set('date', day);
    this.selectedDate = this.date.format('DD-MM-YYYY');
    this.config.control.setValue(this.selectedDate);

    this.selectedDay = {
      day: this.date.date(),
      month: this.date.month(),
      year: this.date.year(),
    };

    this.isOpen = false;
  }

  public isSelectedDay(date: number): boolean {
    if (!this.selectedDay) {
      return false;
    }

    const { day, month, year } = this.selectedDay;

    return date === day
      && (month + 1) === this.simpleDate.month
      && year === this.simpleDate.year;
  }

  public isDisabledDay(day: number) {
    const { month, year } = this.simpleDate;
    const date = dayjs(`${ month }-${ day }-${ year }`, 'MM-DD-YYYY');

    return date.isBefore(this.currentDate, 'date');
  }

  public selectMonth(month: number): void {
    this.date = this.date.set('month', month);
    this.updateSimpleDate();
    this.toggleMonths();
  }

  public previousYear(): void {
    this.date = this.date.subtract(1, 'year');
    this.updateSimpleDate();
  }

  public nextYear(): void {
    this.date = this.date.add(1, 'year');
    this.updateSimpleDate();
  }

  public closeFromBackground(): void {
    this.isOpen = false;
  }

  private updateSimpleDate(): void {
    this.simpleDate = {
      day: this.date.date(),
      month: this.date.month() + 1,
      year: this.date.year(),
    };
  }
}
