const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


// Config   
    // Template Engine
    app.engine('handlebars', handlebars.engine({ 
        defaultLayout: 'main', 
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true, 
        },    
    }))
    app.set('view engine', 'handlebars')

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

// Rota

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
        
    })

    app.get('/create', function (req, res) { // Rota create
        res.render('formulario') // Renderiza o aquivo formulario do handlebars
    })

    

    app.post('/add', function(req, res){ // Rota add
        Post.create({ // Criando post
            titulo: req.body.titulo, // Requerindo titulo do post
            conteudo: req.body.conteudo // Requerindo conteudo do post
        }).then(function(){
            res.redirect('/')
        }).catch(function(){
            res.send("Houve um erro: " + erro)
        })
        
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){ // Deleta o post onde o id for igual o paramentro  
            res.render('sucess') // Renderiza a pagina sucesso do handlebars
        }).catch(function(erro){ // Função do erro
            res.send("Está postagem não existe!")
        })
    })



app.listen(8081, () => { // localhost:8081
    console.log('Servidor Iniciado')
})
