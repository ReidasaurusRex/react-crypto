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
      var returnMessage = '';
      for (var i = 0; i < message.length; i++) {
        if ((message[i] >= 'A' && message[i] <= 'Z' ) || (message[i] >= 'a' && message[i] <= 'z')) {
          const reducer = (message[i] <= 'Z') ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
          const reducedChar = message[i].charCodeAt(0) - reducer;
          const keyedChar = (crypt === 'encrypt') ? (reducedChar + key) % 26 : (reducedChar + (26 - key)) % 26;
          returnMessage += String.fromCharCode(keyedChar + reducer);
        } else {
          returnMessage += message[i];
        }
      }
      return returnMessage;
    } else {
      throw("Incorrect key type passed to caesarCrypt. Expected an integer, Number.isInteger(" + key + ") returned false.");
    }
  }

  static vigenereCrypt(key, crypt, message) {
    if (key.match(/[A-Za-z]+$/) && !key.includes(' ')) {
      var returnMessage = '';
      var keyCounter = 0; 
      for (var i = 0; i < message.length; i++) {
        if (message[i].match(/[A-za-z]/)) {
          const keyCode = key.charCodeAt(keyCounter);
          const keyShift = key[keyCounter] <= 'Z' ? keyCode - 'A'.charCodeAt(0) : keyCode - 'a'.charCodeAt(0);
          const reducer = (message[i] <= 'Z') ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
          const reducedChar = message[i].charCodeAt(0) - reducer;
          const keyedChar = (crypt === 'encrypt') ? (reducedChar + keyShift) % 26 : (reducedChar + (26 - keyShift)) % 26;
          returnMessage += String.fromCharCode(keyedChar + reducer);
          keyCounter = (keyCounter + 1) % key.length;
        } else {
          returnMessage += message[i];
        }
      }
      return returnMessage;
    } else {
      throw("Incorrect key type passed to vigenereCrypt. Expected a string with only letters, received " + key + ".");
    }
  }
}

export default CryptHandler;