exports.homePage = (req, res) => {
  res.render('index'); // não precisa da extensão, só o nome do arquivo (index).ejs <- não precisa
}

exports.treatPost = (req, res) => {
  res.send('New route of POST');
}