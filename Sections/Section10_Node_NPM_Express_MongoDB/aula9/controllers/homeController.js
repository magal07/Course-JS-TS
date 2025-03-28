exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Client name: <input type="text" name="name">
    Other: <input type="text" name="others">
    <button>Send Forms</buttmn> 
    </form>`
  );
}

exports.treatPost = (req, res) => {
  res.send('New route of POST');
}