var odata = require('../../');
var data = require("./meta.json");

var server = odata('mongodb://root:example@localhost:27017/?authSource=admin&readPreference=primary&appname=odata&directConnection=true&ssl=false');

var metadata = {
    id: String,
    name: String,
    meta: [
      {
        key: String, 
        value: String | Number | Boolean
      }
    ]
  };

model = server._db.model('metadata');

model.remove({}, function(err, result) {
  data.map(function(item) {
    entity = new model(item);
    entity.save();
  });
});

server.resource('metadata', metadata);

server.on('connected', function() {
  console.log('MongoDB connected!');
});
server.on('disconnected', function() {
  console.log('MongoDB disconnected!');
});

server.listen(3000, function(){
  console.log('OData services has started, you can visit by http://localhost:3000/metadata');
});
