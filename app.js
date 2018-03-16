const app = require('./config/server.js');
const port = 3000;

app.listen(port, function(){
console.log(`Server running at port ${port}`)
});