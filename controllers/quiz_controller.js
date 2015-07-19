var models = require('../models/models.js');


//GET /quizes
exports.index = function(req, res) {
	models.quiz.findAll().then(function(quizes) {
		res.render('index.ejs', { quizes: quizes});
	})
};



//GET /quizes/:quizId
exports.show = function(req, res) {
	models.quiz.find(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', { quiz: quiz});
	})
};


//GET /quizes/:quizId/answer
exports.answer = function(req, res) {
	models.quiz.find(req.params.quizId).then(function(quiz) {
		if (req.query.respuesta === quiz.respuesta) {
			res.render('quizes/answer', { quiz: quiz, respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', { quiz: quiz, respuesta: 'Incorrecto'});
		}
	})	
};


//GET /author
exports.author = function(req, res) {
	res.render('author', {nombre: 'Javier'});
};