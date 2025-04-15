const { html2 } = require('./base');

// $1 $2 $3 -> Retrovisores
// .* -> Qualquer coisa

 
// console.log(html2);
// console.log(html2.match(/<(\w+)>.+?<\/\1>/gi)); // retrovisor \1
console.log(html2.replace
  //   1 2   SERIA O 3      3          4     
  (/(<(\w+)(?:[\s\S])*?>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA "$3" HAHA$4')); // retrovisor 
