function checkAccess(access) {
    return (req, res, next) => {
        if (!access.includes(access)) {
            return res.status(401).end();
        }
        next();
    };
}
export default checkAccess;
