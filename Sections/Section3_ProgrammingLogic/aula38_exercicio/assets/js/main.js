const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // querySelectorAll ('') select all paramters within of ('')

// searching all styles of css
const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.background = backgroundColorBody; // adding background primary in paragraph
    p.style.color = 'rgb(255,0,0)'; // adding style red in letter
    console.log(p);
}