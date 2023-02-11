import MainWorker from "./main.worker.js";

class ArtistWorker extends MainWorker {
   async detailsById(id) {
      let artistRes = await this.http(this.baseCalls.getArtistPage, true, {
         artistId: id,
      });
      if (!artistRes.name) {
         return this.error.notFound;
      }
      return this.makeArtistPayload(artistRes);
   }
}

export default ArtistWorker;
