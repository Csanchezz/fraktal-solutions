var Todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : true}));
    //for Jose
    app.get('/user/all/', function(req, res){
        Todos.find({},function(err, todos){
            if(err) throw err;
            res.json(todos);
        });
    });

    app.get('/user/:username', function(req, res){
        Todos.find({username: req.params.username },function(err, todos){
            if(err) throw err;
            res.json(todos);
        });
    });

    //Post
    app.post('/user', function(req, res){
        Todos.find({username: req.body.username },function(err, customers){
            if(err) throw err;
            res.json(customers);
        });
    });

    app.get('/user/todo/:id', function(req, res){
        Todos.findById({ _id: req.params.id }, function(err, todo){
            if(err) throw err;
            res.send(todo);
        });
    });

    app.post('/user/todo', function(req,res){
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo){
                if(err) throw err;
                res.send('Updated!');
            });
        }
        else {
            var newTodo = Todos({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Created!');
            });
        }
    });

    app.delete('/user/todo', function(req, res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Deleted!');
        });
    });

}