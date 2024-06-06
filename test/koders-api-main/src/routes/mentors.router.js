const express = require('express');
const mentorsUseCase = require('../usecases/mentors.usecase');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const mentors = await mentorsUseCase.getAll();
        res.json({
            success: true,
            data: { mentors }
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/', async (req,res) => {
    try {
        const mentorCreated = await mentorsUseCase.create(req.body);
        res.json({
            success: true,
            data: { mentor: mentorCreated },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const mentor = await mentorsUseCase.getById(id);
        res.json({
            success: true,
            data: { mentor },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const{ id } = req.params;
        const mentorDeleted = await mentorsUseCase.deleteById(id);
        res.json({
            success: true,
            data: { mentor: mentorDeleted },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const mentorUpdated = await mentorsUseCase.updateById(id);
        res.json({
            succes:true,
            data: { mentor: mentorUpdated},
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

module.exports = router;