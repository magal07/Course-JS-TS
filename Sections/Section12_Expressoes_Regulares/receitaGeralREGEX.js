// https://regex101.com/
// Encontra todas as palavras 
const palavrasRegEx = /([\wÀ-ú]+)/g

// não numeros (TIRA TUDO Q N É NUMERO DA STRING)
const naoNumerosRegEx = /\D/g

// Valida IP

const ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// Valida CPF

const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida Telefone

const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Valida senha forte: 

const validaSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g;

// validar email: 

const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;