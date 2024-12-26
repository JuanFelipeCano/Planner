const email = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const onlyLetters = /^[a-zA-ZÀ-ÿ ]+$/;
const onlyNumbers = /^\d+$/;

export const Patterns = {
  email,
  onlyLetters,
  onlyNumbers,
};
