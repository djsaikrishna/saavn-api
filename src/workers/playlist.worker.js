import MainWorker from "./main.worker.js";

class PlaylistWorker extends MainWorker {
  async detailsById(id) {
    let playlistRes = await this.http(this.baseCalls.getPlaylistFromId, false, {
      listid: id,
    });
    if (!playlistRes.uid) {
      return this.error.notFound;
    }

    return this.makePlaylistPayload(playlistRes);
  }
}

export default PlaylistWorker;
