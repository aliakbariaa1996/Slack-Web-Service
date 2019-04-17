const Transform = require('../../../Transform');

 class  GetChannelsList extends Transform {

    transform(item) {
        return {
            'channel'    : item.channel,
            'timestamp'  : item.ts,
                }
    }
}

module.exports = GetChannelsList;