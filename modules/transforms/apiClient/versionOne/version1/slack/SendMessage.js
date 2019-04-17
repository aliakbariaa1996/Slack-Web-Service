const Transform = require('./../../../Transform');

 class  SendMessage extends Transform {

    transform(item) {
        return {
            'channel'    : item.channel,
            'timestamp' : item.ts,
                }
    }
}

module.exports = SendMessage;