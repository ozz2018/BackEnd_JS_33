const express = require("express");
const kodersUsecase = require("../usecases/koders.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

// GET /koders
router.get("/", auth, async (request, response) => {
  try {
    const koders = await kodersUsecase.getAll();

    response.json({
      success: true,
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// POST /koders
router.post("/", async (request, response) => {
  try {
    const koderCreated = await kodersUsecase.create(request.body);

    response.json({
      success: true,
      data: { koder: koderCreated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// GET /koders/:id
router.get("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const koder = await kodersUsecase.getById(id);

    response.json({
      success: true,
      data: { koder },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// DELETE /koders/:id
router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderDeleted = await kodersUsecase.deleteById(id);

    response.json({
      success: true,
      data: { koder: koderDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// PATCH /koders/:id
router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderUpdated = await kodersUsecase.updateById(id, request.body);

    response.json({
      success: true,
      data: { koder: koderUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
