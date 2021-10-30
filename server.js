const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("running on port", port);
});

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));