export const PasswordGen = (passwordLength:number,lowerCaseSwitch:boolean,upperCaseSwitch:boolean,
    numberSwitch:boolean,specialSwitch:boolean
): string => {
    let generatedPassword = '';
  
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    const regexLower = /[a-z]/;
    const regexUpper = /[A-Z]/;
    const regexDigit = /[0-9]/;
    const regexSplCharacters = /[!@#$%^&*()_+[\]{}|;:,.<>?]/;
    let characterList = '';
    if (lowerCaseSwitch) characterList += lowerCaseLetters;
    if (upperCaseSwitch) characterList += upperCaseLetters;
    if (numberSwitch) characterList += numbers;
    if (specialSwitch) characterList += specialCharacters;
    const characterListLength = characterList.length;
    
    const PASSWORD_LENGTH = passwordLength; // Example length, you can adjust as needed
    
    // Generate cryptographic strong number from range [0, 1)
    const generateRandom = (): number => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
  
    // Ensure the password contains at least one of each required character type
    if (!regexLower.test(generatedPassword)&& lowerCaseSwitch) {
      const characterIndex = Math.floor(generateRandom() * lowerCaseLetters.length);
      generatedPassword = generatedPassword + lowerCaseLetters.charAt(characterIndex);
    }
    if (!regexUpper.test(generatedPassword)&& upperCaseSwitch) {
      const characterIndex = Math.floor(generateRandom() * upperCaseLetters.length);
      generatedPassword = generatedPassword + upperCaseLetters.charAt(characterIndex);
    }
    if (!regexDigit.test(generatedPassword)&& numberSwitch) {
      const characterIndex = Math.floor(generateRandom() * numbers.length);
      generatedPassword = generatedPassword + numbers.charAt(characterIndex);
    }
    if (!regexSplCharacters.test(generatedPassword)&& specialSwitch) {
      const characterIndex = Math.floor(generateRandom() * specialCharacters.length);
      generatedPassword = generatedPassword + specialCharacters.charAt(characterIndex);
    }
  
    // Fill the rest of the password length with random characters
    for (let i = generatedPassword.length; i < PASSWORD_LENGTH; i++) {
      const characterIndex = Math.floor(generateRandom() * characterListLength);
      generatedPassword = generatedPassword + characterList.charAt(characterIndex);
    }
  
    return generatedPassword;
  };