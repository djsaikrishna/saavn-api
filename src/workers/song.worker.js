import MainWorker from "./main.worker.js";

class SongWorker extends MainWorker {
  async getDetails(id) {
    let songRes = await this.http(this.baseCalls.getSongFromId, false, {
      pids: id,
    });
    //!songRes also has recoModules

    if (!songRes.songs) {
      return this.error.notFound;
    }
    songRes.songs = songRes.songs.map((song) => {
      return this.makeSongPayload(song);
    });
    return songRes;
  }
}

export default SongWorker;
