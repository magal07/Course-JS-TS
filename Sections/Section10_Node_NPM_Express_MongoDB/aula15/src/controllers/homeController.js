exports.homePage = (req, res) => {
  res.render('index'); // não precisa da extensão, só o nome do arquivo (index).ejs <- não precisa
  return;
};

exports.treatPost = (req, res) => {
  res.send(req.body);
  return;
};