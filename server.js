var http = require("http");
 
var server = http.createServer(function (req, res) {
   if(req.url == '/'){
    var TwitterPackage = require('twitter');
var secret = {
  consumer_key: 'Nql8oVVVXuiCScghKgmqpibFj',
  consumer_secret: 'evKzw8s9lqvL172wqCARpK6TGEG0DhGofEHL28anXUtWNP1oa5',
  access_token_key:'981664189851856896-4nsSEku7deMJslltvRS7D7TH7x8Z27l',
  access_token_secret:'GPzaN7Q67T4wvNSa94K4jO3jaAOlUGykW6gOnkVrpsrJg'
}
var T = new TwitterPackage(secret);
  
var paths = require('path');

var image = require('fs').readFileSync(paths.join(__dirname,'capture/test.png'));


T.post('media/upload', {media: image}, function(err, data, res) {
if (err) console.log(err);
	console.log(data);
T.post('statuses/update', {status: '#accident #calamity #waste #garbage #vehicle# people #abend #damage #wreck #battle #car #demolition #pollution #flood #hurricane #injury', media_ids: data.media_id_string}, function(err, params, res) {
	if (err) console.log(err);
console.log(params);
});
});
   
  res.setHeader('Content-Type', 'text/html')
  res.end('<body style="background:#2d9add;"><h1 style="color:white;">Your Tweet has been posted.</h1></body>');
   
}
console.log(req.url);
});

server.listen(8082, function(){
console.log('listening to 8080');
});