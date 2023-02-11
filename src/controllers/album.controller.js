import ERRORS from "../errors/errors.js";
import AlbumWorker from "../workers/album.worker.js";

const albumController = async (req, res) => {
   if (!req.query.id) {
      return res
         .status(ERRORS.badRequest().CODE)
         .json(ERRORS.badRequest(["id"]));
   }
   const albumRes = await new AlbumWorker().detaildById(req.query.id);
   res.json(albumRes);
};

export default albumController;
