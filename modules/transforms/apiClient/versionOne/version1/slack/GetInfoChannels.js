const Transform = require('../../../Transform');

 class  GetInfoChannels extends Transform {

    transform(item) {
        return {
            'channelInfo'    : item.channel
                        }
    }
}

module.exports = GetInfoChannels;