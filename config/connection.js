var mysql = require('mysql');
var connection = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'tony',
     database:'burgers_db'
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: '	y7akqu6ig2kg8jy5',
        password: 'e6nw4nbbbifw4ip7',
        database: 'bi3buz330bfq1mmq'
    })
}
connection.connect(function(err){
    if(err)throw err;
    console.log('connected as id: '+connection.threadId);
});

module.exports = connection;