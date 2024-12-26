import { BaseResponse } from '@api/responses';
import { CoreExceptionBase } from './core-exception.base';

export type ExceptionResponseBase = BaseResponse | CoreExceptionBase;
