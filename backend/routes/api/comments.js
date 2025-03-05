/**
 * @fileoverview This file contains the routes for handling comments in the Anythink Market application.
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * GET /api/comments
 * @summary Get all comments
 * @description This endpoint retrieves all comments from the database.
 * @route GET /api/comments
 * @returns {Array<Object>} 200 - An array of comment objects
 * @returns {Error} 500 - Internal server error
 */

/**
 * DELETE /api/comments/:id
 * @summary Delete a comment
 * @description This endpoint deletes a comment by its ID.
 * @route DELETE /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {null} 204 - No content, comment deleted successfully
 * @returns {Error} 500 - Internal server error
 */

module.exports = router;

// Hey GitHub Copilot, I want to get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send();
    }
    });
