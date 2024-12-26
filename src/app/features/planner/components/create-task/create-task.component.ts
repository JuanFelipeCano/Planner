/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit } from '@angular/core';
import { CREATE_TASK_CONFIG, CREATE_TASK_IMPORTS, CreateTaskViewModel } from './config';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ ...CREATE_TASK_IMPORTS],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
  host: { 'class': 'create-task' },
})
export class CreateTaskComponent implements OnInit {

  public readonly config = CREATE_TASK_CONFIG;
  public viewModel!: CreateTaskViewModel;

  constructor() {
    this.viewModel = new CreateTaskViewModel();
  }

  public ngOnInit(): void {
    this.initComponent();
  }

  private initComponent(): void {
    this.viewModel.createForm();
  }
}
