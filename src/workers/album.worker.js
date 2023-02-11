import MainWorker from "./main.worker.js";

class AlbumWorker extends MainWorker {
  async detaildById(id) {
    let albumRes = await this.http(this.baseCalls.getAlbumFromId, false, {
      albumid: id,
    });

    if (!albumRes.title && !albumRes.albumid) {
      return this.error.notFound;
    }

    albumRes = this.makeAlbumPayload(albumRes);

    return albumRes;
  }
}

export default AlbumWorker;
