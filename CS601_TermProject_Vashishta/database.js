var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '35.226.24.68',
  user: 'saahilvashishta',     
  password: '*Saahil8',      
  database: 'saahilvashishta' 
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;