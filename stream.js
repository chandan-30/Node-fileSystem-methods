const fs = require('fs');

const rs = fs.createReadStream('./doc/t1.txt',{encoding: 'utf8'});
const ws = fs.createWriteStream('./doc/t2.txt');

rs.on('data',(chunk)=>{
    console.log('-----New Chunk------');
    console.log(chunk);
    ws.write(chunk);
});

//piping

rs.pipe(wr);