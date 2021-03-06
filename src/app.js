const express = require('express');
const app = express();
const expressip = require('express-ip');
const PORT = process.env.PORT || 3000;
const path = require('path');
const iplocation = require("iplocation").default;

app.use(expressip().getIpInfoMiddleware);


app.set("PORT", PORT);

app.get('/ip', function (req, res) {
  const ipInfo = req.ipInfo;
  console.log(ipInfo);
  var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
  res.send(message);
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});
