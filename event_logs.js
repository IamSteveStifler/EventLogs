const {format} = require('date-fns');
const {v4 : uuid} = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const event_logs = async (msg) => {
    const time = format(new Date(), 'yyyy/MM/dd\tHH:mm:ss');
    const data = `${uuid()}\t${time}\t${msg}\n`;

    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlogs.txt'), data);

        console.log('Operation Completed!!!');

    }catch(err){
        console.error(err);
    }
}

module.exports = event_logs;