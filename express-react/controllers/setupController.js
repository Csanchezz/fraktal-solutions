var Todos = require('../models/todoModels');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        //seed Db
        var starterTodos = [
            {
                username: 'Charlotte',
                todo: 'Buy many servers',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Cyny',
                todo: 'Feed to carnivorous Plants',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Zeus',
                todo: 'Kill some Daemons',
                isDone: false,
                hasAttachment: false
            },
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}