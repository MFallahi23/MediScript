import express from "express";
import { addPost, getPostById, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.post("/", addPost);
router.get("/", getPosts);
router.get("/:id", getPostById);

export default router;
