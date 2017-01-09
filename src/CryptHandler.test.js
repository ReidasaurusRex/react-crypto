import CryptHandler from './CryptHandler';
const message = 'Fish Sandwich!';

it('returns the same string with Caesar 0', () => {
  const caesarEncryption = CryptHandler.handleCrypt('caesar', 0, 'encrypt', message);
  expect(caesarEncryption).toBe("Fish Sandwich!");
});

it('encrypts Fish Sandwich to Gjti Tboexjdi! with Caesar 1', () => {
  const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'encrypt', message);
  expect(caesarEncryption).toBe('Gjti Tboexjdi!');
})

it('decrypts Gjti Tboexjdi! to Fish Sandwich! with Caesar 1', () => {
  const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'decrypt', 'Gjti Tboexjdi!');
  expect(caesarEncryption).toBe('Fish Sandwich!');
})

it('properly bounces end of alphabet to beginning of alphabet with Caesar', () => {
  const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'encrypt', 'AAZZ az azz zz');
  expect(caesarEncryption).toBe('BBAA ba baa aa');
})

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