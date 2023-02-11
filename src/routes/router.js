import express from "express";
import albumController from "../controllers/album.controller.js";
import artistController from "../controllers/artist.controller.js";
import playlistController from "../controllers/playlist.controller.js";
import songController from "../controllers/song.controller.js";

const router = express.Router();

router
  .get("/songs", songController)
  .get("/playlist", playlistController)
  .get("/album", albumController)
  .get("/artist", artistController);

export default router;
