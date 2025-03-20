class ValidateCPF {
  constructor(cpfSent) {
    // Creates a non-writable, non-configurable property that stores the cleaned CPF (digits only)
    Object.defineProperty(this, 'cpfClear', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfSent.replace(/\D+/g, '') // Removes all non-digit characters
    });
  }

  isSequence() {
    // Checks if the CPF is a sequence of the same number repeated 11 times
    return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  generateNewCpf() {
    const cpfNoDigit = this.cpfClear.slice(0, -2); // Removes the last two digits of the CPF

    // Calls the static method to calculate the first verifying digit
    const digit1 = ValidateCPF.generateDigit(cpfNoDigit); 
    // Calls the static method to calculate the second verifying digit
    const digit2 = ValidateCPF.generateDigit(cpfNoDigit + digit1); 

    // Generates the new CPF by concatenating the base with the two verifying digits
    this.newCpf = cpfNoDigit + digit1 + digit2;
  }

  // Static method used to calculate verifying digits of the CPF
  static generateDigit(cpfNoDigit) {
    let total = 0;
    let reverse = cpfNoDigit.length + 1; // Starts the multiplier from the CPF length + 1

    // Iterates through each digit of the CPF base and calculates the weighted sum
    for (let stringNumber of cpfNoDigit) {
      total += reverse * Number(stringNumber); // Multiplies the digit by the current weight
      reverse--; // Decreases the weight
    }

    // Calculates the verifying digit based on the weighted sum
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0'; // If digit > 9, returns '0'
  }

  isValid() {
    // Validates the CPF based on several rules

    if (!this.cpfClear) return false; // CPF must not be empty
    if (typeof this.cpfClear !== 'string') return false; // CPF must be a string
    if (this.cpfClear.length !== 11) return false; // CPF must be 11 characters long
    if (this.isSequence()) return false; // CPF must not be a sequence of repeated digits

    // Generates the CPF with verifying digits
    this.generateNewCpf();

    // Compares the generated CPF with the original
    return this.newCpf === this.cpfClear;
  }
}

// Example of usage:
// let validateCPF = new ValidateCPF('705.484.450-52'); // Valid CPF
// // validateCPF = new ValidateCPF('111.111.111-11'); // Invalid CPF example
// if (validateCPF.isValid()) {
//   console.log('CPF is valid');
// } else {
//   console.log('CPF not valid');
// }
