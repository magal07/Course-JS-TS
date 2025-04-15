const { cpfs, ips } = require('./base');
// ^ = começa com
// $ = termina com
/* CPFs
console.log(cpfs);
// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
// console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g)); // menor expressão pra validar um cpf

*/ 

console.log(ips);
// const ipRegExp = (ips.match(/(\d{1,3}\.){3}\d{1,3}/g)); // menor expressão pra validar um ip
// 10 a 99 
// 0 a 9 \d
// const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;
//modo extenso
// const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
// modo mais simples

// for(let i = 0; i <= 300; i++) {
  //   const ip = `${i}.${i}.${i}.${i}`;
  //   console.log(ip, ip.match(ipRegExp));
  // }
  const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

  console.log(ips.match(ipRegExp));
