export const randomId = (key: string = '', length: number = 10): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // Create a buffer to hold random values
  const randomValues = new Uint8Array(length);
  // Fill the buffer with random values
  window.crypto.getRandomValues(randomValues);

  let id = '';
  for (let i = 0; i < length; i++) {
    // Use the random value from the array to pick a character from `chars`
    id += chars.charAt(randomValues[i] % chars.length);
  }

  return `${ key }-${ id }`;
};
