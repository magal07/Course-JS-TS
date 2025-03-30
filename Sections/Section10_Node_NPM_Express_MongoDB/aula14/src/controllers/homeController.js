/* const HomeModel = require('../models/HomeModel');
 model create and find 
HomeModel.create({
  title: 'Testing 3',
  description: 'Testing 3'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

// searching / get
HomeModel.find()
.then(dados => console.log(dados))
.catch(e => console.log(e));
*/ 
exports.homePage = (req, res) => {
  console.log('Respondendo o cliente.')
  res.render('index'); // não precisa da extensão, só o nome do arquivo (index).ejs <- não precisa
  return;
}

exports.treatPost = (req, res, next) => {
  res.send(req.body);
  return;
}