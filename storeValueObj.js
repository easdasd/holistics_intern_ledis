class StoreValueObj {
    constructor(value, type){
        this.value = value
        this.type = type
        this.expiredAt = 0
        this.ttl = -1
    }

    expire(seconds) {
        this.expiredAt = (new Date()).getTime() + seconds * 1000
    }
}

module.exports = StoreValueObj