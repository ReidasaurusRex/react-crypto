class CryptHandler {
  static handleCrypt(cipher, key, crypt, message) {
    if (cipher === 'caesar') {

    } else if (cipher === 'vigenere') {

    } else {
      throw("Incorrect cipher. Expected 'caesar' or 'vigenere', received " + cipher)
    }
  }

  static caesarCrypt(key, crypt, message) {

  }

  static vigenereCrypt(key, crypt, message) {
    
  }
}

export default CryptHandler;