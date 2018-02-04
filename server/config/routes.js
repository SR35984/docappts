var path = require('path'),
	users = require('../controllers/users'),
	sessions = require('../controllers/sessions'),
	appointments = require('../controllers/appointments');

module.exports = (app) => {
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.post('/create', appointments.create);
	app.get('/appointments', appointments.index);
	app.delete('/appointments/:id', appointments.delete);

	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}