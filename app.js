const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.listen(process.env.PORT || 3000 , function(){
    console.log('listening on *:', process.env.PORT || 3000);
});

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('event connection');



    socket.on('connect_error', function(error){
        console.log('event connect_error, error', error);
    });
    socket.on('error', function(error){
        console.log('event error, error:', error);
    });
    socket.on('connect_timeout', function(timeout){
        console.log('event connect_timeout, timeout:', timeout);
    });
    socket.on('reconnect', function(attemptNumber){
        console.log('event reconnect, attemptNumber:', attemptNumber);
    });
    socket.on('reconnect_attempt', function(attemptNumber){
        console.log('event reconnect_attempt, attemptNumber:', attemptNumber);
    });
    socket.on('reconnecting', function(attemptNumber){
        console.log('event reconnecting, attemptNumber:', attemptNumber);
    });
    socket.on('reconnect_error', function(error){
        console.log('event reconnect_error, error:', error);
    });
    socket.on('reconnect_failed', function(){
        console.log('event reconnect_error');
    });
    socket.on('disconnect', function(reason){
        console.log('event disconnect, reason:', reason);
    });

    socket.on('broadcastme', function(){
        console.log('emit broadcast');
        io.emit('broadcast', "Whaaaou beautiful broadcast");
    });
});

