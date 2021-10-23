const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./build'));
app.use('*', express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile('./build/index.html');
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); ``