module.exports = function () {
    return function (req, res, next) {
        req.query = Object.fromEntries(
            Object.entries(req.query).map(([k, v]) => [k, v.split("").reverse().join("")])
        );
        // Implement the middleware function based on the options object
        next();
    }
}
