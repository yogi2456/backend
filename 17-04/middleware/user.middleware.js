export const isValidToken = (req, res, next) => {
    console.log("Token is verified")
    next();
};