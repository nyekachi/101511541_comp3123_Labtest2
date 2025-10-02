console.log("remove.js started ...");

const fs = require('fs');
const path = require('path');

//Define Logs directory path relative to the current file
const logsDir = path.join(__dirname, "logs");

//Check if Logs directory exists
if (fs.existsSync(logsDir)) {
    //read all files in the Logs directory
    fs.readdirSync(logsDir).forEach(file => {
        //display the file being deleted
        console.log(`delete files...${file}`);
        //delete each file
        fs.unlinkSync(path.join(logsDir, file));
    });
    //remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed');
}
else {
    console.log('Logs directory does not exist');
}
