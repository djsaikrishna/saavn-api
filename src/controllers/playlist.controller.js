import ERRORS from "../errors/errors.js";
import PlaylistWorker from "../workers/playlist.worker.js";

const playlistController = async (req, res) => {
   if (!req.query.id) {
      return res
         .status(ERRORS.badRequest().CODE)
         .json(ERRORS.badRequest(["id"]));
   }
   const playlistWorker = new PlaylistWorker();
   res.json(await playlistWorker.detailsById(req.query.id));
};

export default playlistController;
