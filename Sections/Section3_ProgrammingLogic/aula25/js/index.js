const hora = 5;

if(hora >= 6 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
}
else if (hora >= 18 && hora <= 24 || hora < 6) {
    console.log('Boa noite!');
}
