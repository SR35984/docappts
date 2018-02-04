var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
	// date: {
	// 	type: String,
	// 	required: [true, "Date is required."],
	// },
	// time: {
	// 	type: String,
	// 	required: [true, "Time is required."],
	// },
	complaint: {
		type: String,
		required: [true, "Complaint must be 10 characters long."],
		minlength: [10, "Complaint should be 10 characters minimum"]
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
