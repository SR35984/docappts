var session = require('express-session'),
	Appointment = require('../models/appointment'),
	User = require('../models/user')

module.exports = {
	create: (req, res) => {
		const appointment = new Appointment(req.body);
		appointment._user = session.user_id;
		appointment.save( (err) => {
			if (err) {
				return res.json(err);
			}
			return res.json(appointment);
		});
	},
	
	index: (req, res) => {
		Appointment.find({})
		.populate('_user')
		.exec((err, appointments) => {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(appointments);
		});
	},

	delete:(req, res) => {
		Appointment.remove({_id: req.params.id})
		.exec( function(err, appointment) {
			if (err) {
				console.log(err);
			}
			return res.json(appointment);
		});
	},
}