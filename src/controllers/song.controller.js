import ERRORS from "../errors/errors.js";
import SongWorker from "../workers/song.worker.js";

const songController = async (req, res) => {
   if (!req.query.id) {
      return res
         .status(ERRORS.badRequest().CODE)
         .json(ERRORS.badRequest(["id"]));
   }
   const songWorker = new SongWorker();
   return res.json(await songWorker.getDetails(req.query.id));
};

export default songController;
