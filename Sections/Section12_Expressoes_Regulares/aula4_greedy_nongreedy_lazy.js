const { html } = require('./base');

// console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g)); //non-greedy // repare na ,
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //greedy 
//
