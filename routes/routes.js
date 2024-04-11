const express = require('express')
const AlunoController = require('../controllers/AlunoControllers')
const Aluno = require('../models/Aluno')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

// Alunos
router.get('/alunos', (req, res) => AlunoController.getAll(req, res))
router.post('/alunos', (req, res) => AlunoController.create(req, res))
router.get('/alunos/:id', (req, res) => AlunoController.get(req, res))
router.put('/alunos/:id', (req, res) => AlunoController.update(req, res))
router.delete('/alunos/:id', (req, res) => AlunoController.delete(req, res))

module.exports = router