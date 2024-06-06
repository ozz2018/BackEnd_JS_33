const express = require("express");

const generationUseCases = require("../usecases/generations.usecase");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const generations = await generationUseCases.getAll();

    res.json({
      success: true,
      message: "All generations",
      data: {
        generations,
      },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const generation = await generationUseCases.getById(id);

    res.json({
      success: true,
      message: "Generation found",
      data: {
        generation,
      },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const generation = req.body;
    const createdGeneration = await generationUseCases.create(generation);

    res.json({
      success: true,
      message: "Generation created",
      data: {
        generation: createdGeneration,
      },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const generation = req.body;
    const updatedGeneration = await generationUseCases.updateById(
      id,
      generation
    );

    res.json({
      success: true,
      message: "Generation updated",
      data: {
        generation: updatedGeneration,
      },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGeneration = await generationUseCases.deleteById(id);

    res.json({
      success: true,
      message: "Generation deleted",
      data: {
        generation: deletedGeneration,
      },
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
