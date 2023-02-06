import HttpWorker from "./http.worker.js";
import makeAudio from "../utils/makeAudio.js";
import makeImages from "../utils/makeImages.js";

class MainWorker extends HttpWorker {
   makeSongPayload(unmodifiedRes) {
      let modifiedRes = {
         id: unmodifiedRes.id,
         type: unmodifiedRes.type,
         is320kbps: unmodifiedRes["320kbps"] === "true",
         hasLyrics: unmodifiedRes.has_lyrics === "true",
         info: {
            name: unmodifiedRes.song,
            year: unmodifiedRes.year,
            release_date: unmodifiedRes.release_date,
            saavn_url: unmodifiedRes.perma_url,
            lable: unmodifiedRes.lable,
            language: unmodifiedRes.language,
            play_count: unmodifiedRes.play_count,
            copyright_text: unmodifiedRes.copyright_text,
         },
         downloadUrl: makeAudio(unmodifiedRes.media_preview_url),
         image: makeImages(unmodifiedRes.image),
         albumInfo: {
            id: unmodifiedRes.albumid,
            name: unmodifiedRes.album,
            saavn_url: unmodifiedRes.album_url,
         },
         artistsInfo: {
            music: unmodifiedRes.music,
            music_id: unmodifiedRes.music_id,
            primary_artists: unmodifiedRes.primary_artists,
            primary_artists_id: unmodifiedRes.primary_artists_id,
            featured_artists: unmodifiedRes.featured_artists,
            featured_artists_id: unmodifiedRes.featured_artists_id,
            singers: unmodifiedRes.singers,
            artistMap: unmodifiedRes.artistMap,
            starring: unmodifiedRes.starring,
         },
      };
      return modifiedRes;
   }
}

export default MainWorker;
