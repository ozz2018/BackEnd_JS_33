const express = require('express')
const kodersUseCase = require('../usecases/koders.usecase');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

// GET /koders
router.get('/', auth, async (req, res) => {
    try {
        const koders = await kodersUseCase.getAll();
        res.json({
            success: true,
            data: { koders },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

// POST /koders

router.post('/', async (req, res) => {
    try {
        const koderCreated = await kodersUseCase.create(req.body);
        res.json({
            success: true,
            data: { koder: koderCreated },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

// GET /koders/:id
router.get('/:id', auth, async ( req, res) => {
    try {
        // const id = req.params.id
        const { id } = req.params;
        const koder = await kodersUseCase.getById(id);
        res.json({
            success: true,
            data: { koder },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

// DELETE /koders/:id

router.delete('/:id', auth, async ( req, res) => {
    try {
        // const id = req.params.id
        const { id } = req.params;
        const koderDeleted = await kodersUseCase.deleteById(id);
        res.json({
            success: true,
            data: { koder: koderDeleted },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

// PATCH /koders/:id

router.patch('/:id', auth, async ( req, res) => {
    try {
        // const id = req.params.id
        const { id } = req.params;
        const koderUpdated = await kodersUseCase.updateById(id, req.body);
        res.json({
            success: true,
            data: { koder: koderUpdated },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

module.exports = router;