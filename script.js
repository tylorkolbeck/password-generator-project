// Assignment Code
var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



// Write password to the #password input
function writePassword() {
  var password = getPasswordRequirements()
  var passwordText = document.querySelector("#password")

  passwordText.value = password
}

/**
 * @returns {bool|num} returns false if input does not meet
 * requirements else returns input as num 
 */
function checkValidNumInput() {
  let lengthInput = prompt('Choose password length between 8 and 128 characters.')
  let intInput = parseInt(lengthInput)

  if (!isNaN(intInput) && intInput > 7 && intInput < 128) {
    isValid = true
    return intInput
  } else {
    idValid = false
  }
}


/**
 * Continually ask for valid number until number is given
 * that meets given min/max 
 * @returns {num} Length of desired password length
 */
function askLength() {
  let isValid = false

  while (!isValid) {
    isValid = checkValidNumInput()
  }

  return isValid
}

/**
 * @param {num} arrayLength Length of array for upper bound of random number
 * @returns {num} Random number between 0 and arrayLength
 */
function getRandomNumWithArrayLength(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}


/**
 * @param {obj} passwordShapeObj An object containing the desired shape of the password
 */
function buildPasswordWithRequirements(passwordShapeObj) {
  let password, index

  password = ''
  index = 0

  let charTypes = {
    lowerCase: ['abcdefghijklmnopqrstuvwxyz'],
    upperCase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    specialChars: ['!@#$%^&*_-'],
    numChars: ['0123456789']
  }
  
  while (index < passwordShapeObj.length) {
    for (let key in passwordShapeObj) {
        if (passwordShapeObj[key] === true && password.length < passwordShapeObj.length) {
          password = password + charTypes[key][0][getRandomNumWithArrayLength(charTypes[key][0].length)]
        }
        index++
      }
  }  

  if (password.length > 0) {
    return password
  } else {
    return 'You need to select atleast one character type'
  }
}

/**
 * @return {obj} An object with the password shape(requirements)
 */
function getPasswordRequirements() {

  let passwordShapeObj = {
    lowerCase: false,
    upperCase: false,
    specialChars: false,
    numChars: false,
    length: false,
  }

  passwordShapeObj.length = askLength()
  passwordShapeObj.lowerCase = confirm('Lowercase Chars?')
  passwordShapeObj.upperCase = confirm('Uppercase Letters?')
  passwordShapeObj.specialChars = confirm('Special Characters?')
  passwordShapeObj.numChars = confirm('Use numeric characters?')

  return buildPasswordWithRequirements(passwordShapeObj)
}






