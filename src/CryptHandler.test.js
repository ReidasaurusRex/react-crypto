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

  test('throws when passed a non integer', () => {
    expect(() => {
      CrytpHandler.handleCrypt('caesar', 'fish', 'encrypt', message);
    }).toThrow();
  });

});

describe('vigenere', () => {
  
  test('encrypts Fish Sandwich to Giuv Fbnfkvdh! with key bacon', () => {
    const vigenereEncrypt = CryptHandler.handleCrypt('vigenere', 'bacon', 'encrypt', message);
    expect(vigenereEncrypt).toBe('Giuv Fbnfkvdh!');
  });

  test('decrypts Giuv Fbnfkvdh! to Fish Sandwich with key bacon', () => {
    const vigenereDecrypt = CryptHandler.handleCrypt('vigenere', 'bacon', 'decrypt', 'Giuv Fbnfkvdh!');
    expect(vigenereDecrypt).toBe(message);
  });

  test('throws when passed a string with a non letter', () => {
    expect(() => {
      CryptHandler.handleCrypt('vigenere', 'fish0', 'encrypt', message);
    }).toThrow();
  });

  test('throws when passed a string with a space', () => {
    expect(() => {
      CrytpHandler.handleCrypt('vigenere', 'fish and stuff', 'encrypt', message);
    }).toThrow();
  });

});

