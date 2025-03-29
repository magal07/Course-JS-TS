exports.homePage = (req, res) => {
  console.log('Respondendo o cliente.')
  res.render('index'); // não precisa da extensão, só o nome do arquivo (index).ejs <- não precisa
  return;
}

exports.treatPost = (req, res, next) => {
  res.send(req.body);
  return;
}