exports.middewareGlobal = (req, res, next) => {
  res.locals.LocalVariable = 'Value LOCAL VARIABLE';
  next();
}