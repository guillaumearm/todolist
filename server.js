var path = require('path');
var express = require('express');

var app = express()

app.set('port', (process.env.PORT || 8080));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});
