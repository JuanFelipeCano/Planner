import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageDirective } from '@shared/directives';
import { randomId } from '@shared/utils';
import { DsInputConfig } from './models/ds-input-config.model';

@Component({
  selector: 'app-ds-input',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, ErrorMessageDirective ],
  templateUrl: './ds-input.component.html',
  styleUrl: './ds-input.component.scss'
})
export class DsInputComponent implements OnInit {

  @Input() public config!: DsInputConfig;

  public ngOnInit(): void {
    this.setDefaultValues();
  }

  private setDefaultValues(): void {
    this.config.id = this.config?.id || randomId(this.config.label);
  }
}
