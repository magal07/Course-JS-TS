const mongoose = require("mongoose");
const validator = require('validator');
// schema = modelagem dos dados
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  telephone: { type: String, required: false, default: '' },
  createIn: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

Contact.searchById = async function(id) {
  if(typeof id !== 'string') return;
  const user = await ContactModel.findById(id);
  return user;
} 

Contact.prototype.register = async function () {
  this.validate();
  if(this.errors.length > 0) return; 
  this.contact = await ContactModel.create(this.body);
};

Contact.prototype.validate = function () {
  this.cleanUp();
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("Invalid email");
  if(!this.body.name) this.errors.push(`Name field is required.`)
  if(!this.body.email && !this.body.telephone) this.errors.push(`Please provide at least one form of contact.`);
};

Contact.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] = "";
    }
  }
  this.body = {
    name: this.body.name,
    surname: this.body.surname,
    email: this.body.email,
    telephone: this.body.telephone,
  };
};

module.exports = Contact;
