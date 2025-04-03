import validator from 'validator';

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }
  init() {
    this.events();
  }
  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
      this.validate(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validField = this.isValid();
  }

  isValid() {
    let valid = true;

    for(let field of this.form.querySelectorAll('.form-login form-register')){
      console.log(field);
  }
  return valid;
}

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]'); 
    const passwordInput = el.querySelector('input[name="password"]'); 
    let error = false; 

    if(!validator.isEmail(emailInput.value)) {
      alert('Invalid email');
      error = true;
    }
    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      alert('Password must be between 3 and 50 characters long.');
      error = true;
    }
    if(!error) el.submit();
  }
}
