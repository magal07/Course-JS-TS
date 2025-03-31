exports.middewareGlobal = (req, res, next) => {
  res.locals.LocalVariable = 'Value LOCAL VARIABLE';
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); 
  next();
}