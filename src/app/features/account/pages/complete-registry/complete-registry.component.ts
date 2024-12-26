import { Component, OnInit } from '@angular/core';
import { I18nConfig } from '@config';
import { AccountContract } from '@features/account/core/contracts';
import { UserData } from '@features/account/data/user.data';
import { BaseComponent } from '@shared/components';
import { CompleteRegistryConfig } from './config/complete-registry.config';
import { COMPLETE_REGISTRY_IMPORTS } from './config/complete-registry.imports';
import { CompleteRegistryViewModel } from './config/complete-registry.view-model';

@Component({
  selector: 'app-complete-registry',
  standalone: true,
  imports: [ ...COMPLETE_REGISTRY_IMPORTS ],
  templateUrl: './complete-registry.component.html',
  styleUrl: './complete-registry.component.scss'
})
export class CompleteRegistryComponent extends BaseComponent implements OnInit {

  public readonly config = CompleteRegistryConfig;
  public viewModel!: CompleteRegistryViewModel;

  constructor(
    private accountContract: AccountContract,
    private userData: UserData,
  ) {
    super();
    this.viewModel = new CompleteRegistryViewModel();
  }

  public ngOnInit(): void {
    this.initComponent();
  }

  public complete(): void {
    if (!this.viewModel.form.valid) {
      return;
    }

    this.loaderService.show();

    const params = this.viewModel.form.value;
    const { email, password } = this.userData;

    this.accountContract.create({ ...params, email, password }).subscribe({
      next: () => {
        this.loaderService.hide();
        this.goToSignIn();
      },
      error: () => {
        this.loaderService.hide();
        this.toastService.warning(
          this.translateProvider.get<string>(this.config.i18n.errors.general)
        );
      }
    });
  }

  private async goToSignIn(): Promise<void> {
    await this.routerProvider.navigate(
      [ this.config.routes.signIn ],
      { replaceUrl: true },
    );
  }

  private async initComponent(): Promise<void> {
    this.viewModel.createForm();
    await this.translateProvider.loadModule(I18nConfig.modules.account.COMPLETE_REGISTRY);
  }

}
