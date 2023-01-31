function checkAccess(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.access)) {
            return req.status(403).end();
        }
        next();
    };
}
export default checkAccess;
