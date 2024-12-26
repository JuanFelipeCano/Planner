import { DS_COMPONENTS, REGULAR_IMPORTS } from '@config/regular-imports';
import { TranslatorPipe } from '@shared/pipes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SIGN_IN_IMPORTS: ReadonlyArray<any> = [
  ...REGULAR_IMPORTS,
  ...DS_COMPONENTS,
  TranslatorPipe,
];
