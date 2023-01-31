function checkRole(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return req.status(403).end();
        }
        next();
    };
}
export default checkRole;
