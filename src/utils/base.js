export const BASE_URL = "https://www.jiosaavn.com/api.php";

const BASE_CALLS = {
   //! Browse Section
   getAlbums: "content.getAlbums", //*NA
   getCharts: "content.getCharts", //*NA
   getTopPlaylist: "content.getFeaturedPlaylists", //*NA
   getTopArtists: "content.getFeaturedPlaylists", //*NA
   getTopPodcasts: "content.getTopShows", //*NA
   getTopSearches: "content.getTopSearches", //*NA

   //!Home Page
   getSearch: "autocomplete.get", //*query=
   getLaunchData: "webapi.getLaunchData", //*NA
   getFooterDetails: "webapi.getFooterDetails", //*NA

   //!Artist
   getArtistPage: "artist.getArtistPageDetails", //*artistId=
   getArtistTopSong: "search.artistOtherTopSongs", //*artists_ids=&song_id

   //!FromID
   getSongFromId: "song.getDetails", //*pids=
   getAlbumFromId: "content.getAlbumDetails", //*albumid=
   getPlaylistFromId: "playlist.getDetails", //*listid=

   //!Recommandations
   getSongReco: "reco.getreco", //*pid=
   getPlaylistReco: "reco.getPlaylistReco", //*listid=
   getAlbumReco: "reco.getAlbumReco", //*albumid=
};

export default BASE_CALLS;

export const queryAndHeaders = (call) => {
   const isApiV4 = () => {
      if (call === BASE_CALLS.getSongFromId) {
         return undefined;
      }
      return 4;
   };
   const returnObj = {
      params: {
         __call: call,
         api_version: isApiV4(),
         _format: "json",
         _marker: "0",
         ctx: "wap6dot0",
      },
      headers: {
         authority: "www.jiosaavn.com",
         cookie: "DL=english;L=hindi%2Cenglish",
      },
   };
   return returnObj;
};
