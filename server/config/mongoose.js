var mongoose = require('mongoose'),
	db_name = "docAppts";

mongoose.connect(`mongodb://localhost/${db_name}`);