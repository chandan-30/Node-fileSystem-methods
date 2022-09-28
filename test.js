const fs = require('fs');

//readFIle

fs.readFile('./doc/tec.txt', (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
});

//writeFile

fs.writeFile('./doc/tec.txt', 'hello sai', () => {
    console.log('written');
});

//create and delete a folder

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err);
        else console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) console.log(err);
        else console.log('folder deleted');
    });
}

if(fs.existsSync('./doc/tt.txt')){
    fs.unlink('./doc/tt.txt', (err) => {
        if(err) console.log(err);
        else console.log('file deleted');
    });
}