class ValidateForms {
  constructor() {
    this.forms = document.querySelector('.forms');
    this.events();

  }
  events() {
    this.forms.addEventListener('submit', e => { // error no permited alter this 
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault(); // prevent form not submit
    const validFields = this.fieldsValid();
    const passwordsValid = this.validPassword();

    if(validFields && passwordsValid) {
      alert('Forms sent');
      this.forms.submit();
    }
  }

  validPassword(){
    let isValid = true;

    const password = this.forms.querySelector('.password');
    const repeatPassword = this.forms.querySelector('.repeat-password');

    if(password.value !== repeatPassword.value) {
      isValid = false;
      this.createError(password, 'Fields must be equal');
      this.createError(repeatPassword, 'Fields must be equal');
    }
    if(password.value.length < 6 || password.value.length > 12){
      isValid = false;
      this.createError(password, 'Password must be between 6 and 12 characters');
    }
    return isValid;
  }

  fieldsValid() {
    let isValid = true;
    // View only 1 error without duplication
    for (let errorText of this.forms.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.forms.querySelectorAll('.validate')) {
      //searching inner Text element brother afterend
      let label = field.previousElementSibling.innerText;
      if (!field.value) {
        this.createError(field, `Field "${label}" cannot be empty`); // Typo in the message: should be 'Field cannot be empty'.
        isValid = false;
        // continue;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validateCPF(field)) isValid = false;
      }
      if (field.classList.contains('user')) {
        if (!this.validateUser(field)) isValid = false;
      }

    } // Error: The function does not return the 'valid' value, so the validation result is not usable outside this method.
    return isValid;
  }

  validateUser(field) {
    const user = field.value;
    let isValid = true;
    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'User must contain between 6 and 12 characters');
      isValid = false;
    }
    if(!user.match(/^[a-zA-Z0-9]+$/g)){
      this.createError(field, 'Username must contain only letters and numbers');
      isValid = false;
    }
    return isValid;
  }

  validateCPF(field) {
    const cpf = new ValidateCPF(field.value);
    if (!cpf.isValid()) {
      this.createError(field, 'Invalid CPF.');
      return false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const valid = new ValidateForms();