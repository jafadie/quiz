var models = require('../models/models.js');


// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
	models.quiz.find(quizId).then(
		function(quiz) {
			if (quiz) {
				req.quiz= quiz;
				next();
			} else {
				next(new Error('No exixte quizId=' + quizId));
			}
		}).catch(function(error) {next(error);});
};


//GET /quizes
exports.index = function(req, res) {
	models.quiz.findAll().then(function(quizes) {
		res.render('quizes/index.ejs', { quizes: quizes});
	}).catch(function(error) {next(error);})
};



//GET /quizes/:quizId
exports.show = function(req, res) {
	models.quiz.find(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', { quiz: req.quiz});
	})
};


//GET /quizes/:quizId/answer
exports.answer = function(req, res) {
	models.quiz.find(req.params.quizId).then(function(quiz) {
		var resultado = 'Incorrecto';

		if (req.query.respuesta === req.quiz.respuesta) {
			resultado = 'Correcto';
		}
		res.render('quizes/answer', { quiz: req.quiz, respuesta: resultado});
	})	
};


//GET /author
exports.author = function(req, res) {
	res.render('author', {nombre: 'Javier'});
};