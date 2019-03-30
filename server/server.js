const app = require('express')();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const expressValidator = require('express-validator');
global.config = require('./modules/config');

// Connect to DB
const db = mysql.createConnection ({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database,
    port:3308
});

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected to database');
});
global.db = db;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(expressValidator());

const apiRouter = require('./modules/routes/api');
const webRouter = require('./modules/routes/web');

app.use('/api' , apiRouter)
app.use('/' , webRouter);

app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
});