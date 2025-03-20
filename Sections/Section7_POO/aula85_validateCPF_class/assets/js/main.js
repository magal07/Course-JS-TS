class ValidateCPF {
  constructor(cpfSent) {
    Object.defineProperty(this, 'cpfClear', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfSent.replace(/\D+/g, '')
    });
  }

  isSequence() {
    return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  generateNewCpf() {
    const cpfNoDigit = this.cpfClear.slice(0, -2); // Remove os dois últimos dígitos
            //     ValidateCPF <- pois foi convertido para static, antes era this.genera...
    const digit1 = ValidateCPF.generateDigit(cpfNoDigit); // Calcula o primeiro dígito
    const digit2 = ValidateCPF.generateDigit(cpfNoDigit + digit1); // Calcula o segundo dígito

    this.newCpf = cpfNoDigit + digit1 + digit2;
  }
// quando n receber a palavra this em 1 método, podemos altera-lo para static.
  static generateDigit(cpfNoDigit) {
    let total = 0;
    let reverse = cpfNoDigit.length + 1;

    for (let stringNumber of cpfNoDigit) {
      total += reverse * Number(stringNumber);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  isValid() {
    if (!this.cpfClear) return false;
    if (typeof this.cpfClear !== 'string') return false;
    if (this.cpfClear.length !== 11) return false;
    if (this.isSequence()) return false;
    this.generateNewCpf();
    return this.newCpf === this.cpfClear;
  }
}


let validateCPF = new ValidateCPF('705.484.450-52'); // OR 070.987.720-03
// validateCPF = new ValidateCPF('111.111.111-11'); // OR 070.987.720-03
if (validateCPF.isValid()) {
  console.log('CPF is valid');
} else {
  console.log('CPF not valid');
}