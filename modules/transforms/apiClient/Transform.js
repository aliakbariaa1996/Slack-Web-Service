class Transform {

    transformCollection(items) {
        return items.map(this.transform)
    }

}
module.exports = Transform;