# socketio-server-helloWorld
A very simple socket.io server, for test purposes.

### Environment
You can set the **PORT** environment variable

### Express
You have an helloWorld on "/"

### Socket
The events below are log in the console:
* connection, 
* connect_error,
* error,
 * connect_timeout,
 * reconnect,
 * reconnect_attempt,
 * reconnecting,
 * reconnect_error,
 * reconnect_failed,
 * disconnect.

If you send an emit on ```"broadcastme"``, you will recieve an emit on ```"broadcast"```.

### CORS
Cors is enabled with ```Access-Control-Allow-Origin: "*"```
