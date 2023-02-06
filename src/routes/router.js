import express from "express";
import songController from "../controllers/song.controller.js";

const router = express.Router();

router.get("/songs", songController);

export default router;
