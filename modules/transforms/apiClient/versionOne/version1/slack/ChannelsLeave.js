const Transform = require('./../../../Transform');

 class  ChannelsLeave extends Transform {

    transform(item) {
        return {
            'notInChannel'  : item.not_in_channel
                }
    }
}

module.exports = ChannelsLeave;