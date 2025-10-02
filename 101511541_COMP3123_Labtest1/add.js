console.log("add.js started ...");
const fs = require('fs');
const path = require('path');

//Define Logs directory path relative to the current file
const logsDir = path.join(__dirname, 'logs');

//check if Logs directory exists
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//Change the current working directory to Logs
process.chdir(logsDir);

//Create 10 log files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    
     fs.writeFileSync(fileName, 'This is log file number ${i}\n')
    
    //0utput to console
    console.log(`Createfiles...${fileName}`);
}
