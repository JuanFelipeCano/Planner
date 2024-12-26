import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@shared/components';
import { AddTaskButtonConfig } from './config/add-task-button.cofig';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [ TranslateModule, IconComponent ],
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss'
})
export class AddTaskButtonComponent {
  public config = AddTaskButtonConfig;

  @Output() public clicked = new EventEmitter();
}
