import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DsButtonConfig } from './models/ds-button-config.model';
import { DSButtonSize } from './models/ds-button-size.enum';
import { DSButtonType } from './models/ds-button-type.enum';

@Component({
  selector: 'app-ds-button',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './ds-button.component.html',
  styleUrl: './ds-button.component.scss'
})
export class DsButtonComponent implements OnInit {

  @Input() public config!: DsButtonConfig;

  @Output() public clicked = new EventEmitter();

  public buttonClasses: Array<string> = [];

  public ngOnInit(): void {
    this.setDefaultValues();
    this.setClasses();
  }

  public onClick(): void {
    this.clicked.emit();
  }

  private setDefaultValues(): void {
    const { type, size } = this.config;

    this.config = {
      ...this.config,
      type: type ?? DSButtonType.PRIMARY,
      size: size ?? DSButtonSize.LARGE,
    };
  }

  private setClasses(): void {
    this.buttonClasses = [
      'ds-button-' + this.config.type,
      'ds-button-' + this.config.size,
    ];
  }
}
