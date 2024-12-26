export interface BaseFullScreenService<Parameters, Response> {
  show(parameters?: Parameters): Promise<unknown>;

  hide?(response?: Response): void;
}
