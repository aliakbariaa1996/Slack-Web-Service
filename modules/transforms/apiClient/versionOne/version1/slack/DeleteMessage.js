const Transform = require('./../../../Transform');

 class  DeleteMessage extends Transform {

    transform(item) {
        return {
            'channel'    : item.channel,
            'timestamp'  : item.ts
                }
    }
}

module.exports = DeleteMessage;