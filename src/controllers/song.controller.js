import ERRORS from "../errors/errors.js";
import SongWorker from "../workers/song.worker.js";

const songController = async (req, res) => {
   if (!req.query.id) {
      return res
         .status(ERRORS.badRequest().CODE)
         .json(ERRORS.badRequest(["id"]));
   }

   return res.json(await new SongWorker().getDetails(req.query.id));
};

export default songController;
