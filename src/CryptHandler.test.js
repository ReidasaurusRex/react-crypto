import CryptHandler from './CryptHandler';
const message = 'Fish Sandwich!';

it('returns the same string with Caesar 0', () => {
  const caesarEncryption = CryptHandler.handleCrypt('caesar', 0, 'encrypt', message);
  expect(caesarEncryption).toBe("Fish Sandwich!");
});

it('throws when passed Fish as a cipher', () => {
  expect(() => {
    CryptHandler.handleCrypt('Fish', 0, 'encrypt', message);
  }).toThrow();
});

it('throws when passed Fish as a crypt', () => {
  expect(() => {
    CryptHandler.handleCrypt('caesar', 0, 'Fish', message);
  }).toThrow();
})