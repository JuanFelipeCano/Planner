import { EmailValidator } from './email/email.validator';
import { OnlyLettersValidator } from './only-letters/only-letters.validator';
import { OnlyNumbersValidator } from './only-numbers/only-numbers.validator';

export const CustomValidators = {
  email: EmailValidator,
  onlyNumbers: OnlyNumbersValidator,
  onlyLetters: OnlyLettersValidator,
};
