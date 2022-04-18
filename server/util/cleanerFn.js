module.exports = function cleaner(value) {
    if (!value) {
        return false
    }
    return value.trim()
}