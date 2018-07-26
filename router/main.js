module.exports = (app, fs) => {
  app.get("/", (req, res) => {
    res.render('app.html');
  })
}