export const BASE_URL = "https://www.jiosaavn.com/api.php";
export const BASE_API_URL = "http://localhost:8000/api";

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
