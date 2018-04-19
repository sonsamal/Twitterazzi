var http = require("http");
 
var server = http.createServer(function (req, res) {
   if(req.url == '/'){
   const Clarifai = require('clarifai');

var testtags = [];
var i, count = 0;

function getTags(image_url){
const app = new Clarifai.App({
 apiKey: 'cd38b0de91bd47ab9f57a2f6413c6392'

});
      app.models.predict(Clarifai.GENERAL_MODEL, image_url).then(
        function abc(response) {
          var tags = response.outputs[0].data.concepts.map(data => data.name);
				  for(i = 0; i <= 8 ; i++){
				  	testtags.push(tags[i]);
				  }
				  var res = "#"+testtags.join(" #");
  				console.log(res);
  				var fs = require("fs");
var fileContent = res;

fs.writeFile("./sample.txt", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});


        },
        function(err) {
          console.error(err);
        }
      );
}

tags = getTags('https://nairobinews.nation.co.ke/wp-content/uploads/2017/08/Meru-accident.jpg');
   res.end('<strong>End the Prgm</strong>');
   }
console.log(req.url);
});

server.listen(3082, function(){
console.log('listening to 3082');
});

