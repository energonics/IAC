'use strict';

exports.handler = function(event, context, callback) {
	var response = {
		statusCode: 200,
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
		},
		body:"Hi, i am version 1.0.1 of the simple serverless func!",
	};
	callback(null, response);
};

