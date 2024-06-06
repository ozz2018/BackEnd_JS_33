const createError = require('http-errors')

const koderUsecase = require('../usecases/koders.usecase');

const jwt = require("../lib/jwt")

async function auth(req, res, next) {
    try { // authorization es el token 
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw createError(401, "JWT is required");
        }
        const payload = jwt.verify(authorization);
        const user = await koderUsecase.getById(payload.id);

        req.user = user;

        next();

    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            error: error.message,
        });
    }
}

module.exports = auth;