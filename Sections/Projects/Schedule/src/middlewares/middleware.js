exports.middewareGlobal = (req, res, next) => {
  res.locals.LocalVariable = 'Value LOCAL VARIABLE';
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); 
  next();
}