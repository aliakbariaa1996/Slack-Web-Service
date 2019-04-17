const Transform = require('./../../../Transform');

 class  ReplyingMessage extends Transform {

    transform(item) {
        return {
            'channel'    : item.channel,
            'timestamp'  : item.ts,
            'message'    : item.message
                }
    }
}

module.exports = ReplyingMessage;