module.exports = function () {
    return function (req, res, next) {
        
        req.query.message = req.query.message.split("").reverse().join("");
        
        // Implement the middleware function based on the options object
        next()
    }
}