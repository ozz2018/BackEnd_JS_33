const createError = require("http-errors");
const Generation = require("../models/generations.model");

async function create(generation) {
  const existingGeneration = await Generation.findOne({
    number: generation.number,
    program: generation.program,
  });

  if (existingGeneration) {
    throw createError(409, "Generation already exists");
  }

  return Generation.create(generation);
}

function getAll() {
  return Generation.find();
}

function getById(id) {
  return Generation.findById(id);
}

function updateById(id, generation) {
  return Generation.findByIdAndUpdate(id, generation, { new: true });
}

function deleteById(id) {
  return Generation.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
