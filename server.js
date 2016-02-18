var serve = require('koa-static');
var koa 	= require('koa');
var app 	= koa();

app.use(serve('.'));
app.use(serve(__dirname + '/client'));

app.use(function *(){
	var url = this.request.url;
	if (url === '/'){
		
	} else if (url === '/user'){
		
	} else {
		this.status = 404;
		this.body = 'error';
	}
});



app.listen(3000);
console.log('listening on port 3000');