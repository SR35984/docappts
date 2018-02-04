var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."],
		minlength: [2, "Name minimum characters is 2."]
	},
	appointments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Appointment'
	}]
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;