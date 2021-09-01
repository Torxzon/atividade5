const express = require('express')
const app = express()
const conversaoModel = require('./models/conversaoModel')
const jwt = require('jsonwebtoken')
const body = require('body-parser')
const {urlencoded} = require('body-parser')

app.get('/alunos/todos', (req, res) => {
    let alunos = [
        {'nome': 'Deryck', 'sobrenome': 'Hudson'},
        {'nome': 'Ana', 'sobrenome': 'Pereira'},
        {'nome': 'Gabriel', 'sobrenome': 'Mota'},
        {'nome': 'Alice', 'sobrenome': 'Teles'}
    ]
    res.json(alunos)
})

app.get('/moeda/:valor_real', conversaoModel.conversao)

app.listen(3000, () => {
    console.log('rodando')
})