import { Injectable, inject } from '@angular/core';
import { CreateTaskComponent } from '@features/planner/components/create-task/create-task.component';
import { CreateTaskInterface } from '@features/planner/core/interfaces';
import { BaseFullScreenService, FullScreenController } from '@shared/components/full-screen';

@Injectable()
export class CreateTaskService implements BaseFullScreenService<CreateTaskInterface, unknown> {

  public readonly _fullScreenController = inject(FullScreenController);

  public async show() {
    const screen = this._fullScreenController.create({
      component: CreateTaskComponent,
      componentProps: {},
    });

    await screen.open();

    return screen.onDidDismiss();
  }
}
