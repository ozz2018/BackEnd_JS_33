const express = require('express');

const authUseCases = require('../usecases/auth.usecase');

const router = express.Router();

// POST 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authUseCases.login(email, password);
        res.json({
            success: true,
            data: { token },
        });
     } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})


module.exports = router