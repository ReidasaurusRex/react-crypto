import CryptHandler from './CryptHandler';
const message = 'Fish Sandwich!';

describe('cryptHandler', () => {
  test('throws when passed Fish as a cipher', () => {
    expect(() => {
      CryptHandler.handleCrypt('Fish', 0, 'encrypt', message);
    }).toThrow();
  });

  test('throws when passed Fish as a crypt', () => {
    expect(() => {
      CryptHandler.handleCrypt('caesar', 0, 'Fish', message);
    }).toThrow();
  });
});

describe('caesar', () => {
  test('returns the same string with key 0', () => {
    const caesarEncryption = CryptHandler.handleCrypt('caesar', 0, 'encrypt', message);
    expect(caesarEncryption).toBe("Fish Sandwich!");
  });

  test('encrypts Fish Sandwich to Gjti Tboexjdi! with key 1', () => {
    const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'encrypt', message);
    expect(caesarEncryption).toBe('Gjti Tboexjdi!');
  });

  test('decrypts Gjti Tboexjdi! to Fish Sandwich! with key 1', () => {
    const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'decrypt', 'Gjti Tboexjdi!');
    expect(caesarEncryption).toBe('Fish Sandwich!');
  });

  test('properly bounces end of alphabet to beginning of alphabet', () => {
    const caesarEncryption = CryptHandler.handleCrypt('caesar', 1, 'encrypt', 'AAZZ az azz zz');
    expect(caesarEncryption).toBe('BBAA ba baa aa');
  });
});

