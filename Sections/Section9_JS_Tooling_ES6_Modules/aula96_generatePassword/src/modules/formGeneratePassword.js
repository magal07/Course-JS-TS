import generatePassword from "./generate";

const passwordGenerate = document.querySelector(".generate-password");
const quantityCharacters = document.querySelector(".quantity-characters");
const checkedUpperCase = document.querySelector(".checked-upper-case");
const chekedLowerCase = document.querySelector(".checked-lower-case");
const chekedNumbers = document.querySelector(".checked-number");
const chekedSymbols = document.querySelector(".checked-symbols");
const btnGeneratePassword = document.querySelector(".btn-generate-password");

export default () => {
  btnGeneratePassword.addEventListener("click", () => {
    passwordGenerate.innerHTML = generate();
  });
};

function generate() {
  const password = generatePassword(
    quantityCharacters.value,
    checkedUpperCase.checked,
    chekedLowerCase.checked, 
    chekedNumbers.checked,
    chekedSymbols.checked,
  );

  return password || 'Select checkbox';
}