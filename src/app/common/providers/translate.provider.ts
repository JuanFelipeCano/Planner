/* eslint-disable @typescript-eslint/no-explicit-any */

export type I18nMessages<T = string> = Record<string, T>;

export abstract class TranslateProvider {

  public abstract loadModule(
    name: string,
    callback?: (response: I18nMessages<any>) => void
  ): Promise<void>;

  public abstract get<T = any>(i18nKey: string, interpolateParams?: Record<string, unknown>): T;
}
