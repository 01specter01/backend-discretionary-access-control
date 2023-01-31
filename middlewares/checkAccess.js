function checkAccess(access) {
    return (req, res, next) => {
        if (!access.includes(req.user.access)) {
            return req.status(403).end();
        }
        next();
    };
}
export default checkAccess;
