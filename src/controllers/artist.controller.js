import ERRORS from "../errors/errors.js";
import ArtistWorker from "../workers/artist.worker.js";

const artistController = async (req, res) => {
   if (!req.query.id) {
      res.status(ERRORS.badRequest().CODE).json(ERRORS.badRequest());
   }
   res.json(await new ArtistWorker().detailsById(req.query.id));
};

export default artistController;
