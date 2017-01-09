class CryptHandler {
  static handleCrypt(cipher, key, crypt, message) {
    if (crypt === 'encrypt' || crypt === 'decrypt') {
      if (cipher === 'caesar') {
        return this.caesarCrypt(key, crypt, message);
      } else if (cipher === 'vigenere') {
        return this.vigenereCrypt(key, crypt, message);
      } else {
        throw("Incorrect cipher passed to handleCrypt. Expected 'caesar' or 'vigenere', received " + cipher + ".");
      }
    } else {
      throw("Incorrect crypt passed to handleCrypt. Expected 'encrypt' or 'decrypt', received " + crypt + ".");
    }
    
  }

  static caesarCrypt(key, crypt, message) {
    if (Number.isInteger(key)) {
      let messageArray = message.split();
      messageArray.forEach((c) => {
        
      })
    } else {
      throw("Incorrect data type passed to caesarCrypt. Expected an integer, Number.isInteger(" + key + ") returned false.");
    }
  }

  static vigenereCrypt(key, crypt, message) {

  }
}

export default CryptHandler;