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
        releaseDate: unmodifiedRes.release_date,
        saavnUrl: unmodifiedRes.perma_url,
        lable: unmodifiedRes.lable,
        language: unmodifiedRes.language,
        playCount: unmodifiedRes.play_count,
        copyrightText: unmodifiedRes.copyright_text,
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
        primaryArtists: unmodifiedRes.primary_artists,
        primaryArtistsId: unmodifiedRes.primary_artists_id,
        featuredArtists: unmodifiedRes.featured_artists,
        featuredArtistsId: unmodifiedRes.featured_artists_id,
        singers: unmodifiedRes.singers,
        artistMap: unmodifiedRes.artistMap,
        starring: unmodifiedRes.starring,
      },
      apiUrl: {
        album: `${this.baseApiUrl}/album?id=${unmodifiedRes.albumid}`,
        primaryArtists: `${this.baseApiUrl}/artist?id=${unmodifiedRes.primary_artists_id}`,
      },
    };
    return modifiedRes;
  }

  makePlaylistPayload(unmodifiedRes) {
    let modifiedRes = {
      playlistId: unmodifiedRes.listid,
      type: unmodifiedRes.type,
      songCount: unmodifiedRes.list_count,
      image: makeImages(unmodifiedRes.image),
      info: {
        name: unmodifiedRes.listname,
        H2: unmodifiedRes.H2,
        fans: unmodifiedRes.fan_count,
        followers: unmodifiedRes.follower_count,
        lastUpdated: unmodifiedRes.last_updated,
        share: unmodifiedRes.share,
        saavnUrl: unmodifiedRes.perma_url,
      },
      artists: unmodifiedRes.artists,
      playlistCreator: {
        uid: unmodifiedRes.uid,
        username: unmodifiedRes.username,
        firstName: unmodifiedRes.firstname,
        lastName: unmodifiedRes.lastName,
      },
    };
    modifiedRes.songs = unmodifiedRes.songs.map((song) => {
      return this.makeSongPayload(song);
    });
    return modifiedRes;
  }

  makeAlbumPayload(unmodifiedRes) {
    let modifiedRes = {
      albumId: unmodifiedRes.albumid,
      title: unmodifiedRes.title,
      name: unmodifiedRes.name,
      year: unmodifiedRes.year,
      releaseDate: unmodifiedRes.release_date,
      primaryArtists: unmodifiedRes.primary_artists,
      primaryArtistsId: unmodifiedRes.primary_artists_id,
      image: makeImages(unmodifiedRes.image),
      saavnUrl: unmodifiedRes.perma_url,
    };
    modifiedRes.songs = unmodifiedRes.songs.map((song) => {
      return this.makeSongPayload(song);
    });
    return modifiedRes;
  }

  makeArtistPayload(unmodifiedRes) {
    let topSongs = [];
    let modifiedRes = {
      artistId: unmodifiedRes.artistId,
      name: unmodifiedRes.name,
      subtitle: unmodifiedRes.subtitle,
      image: unmodifiedRes.image,
      followers: unmodifiedRes.follower_count,
      type: unmodifiedRes.type,
      isVerified: unmodifiedRes.isVerified,
      dominantLanguage: unmodifiedRes.dominantLanguage,
      dominanType: unmodifiedRes.dominantType,
      topSongs: unmodifiedRes.topSongs.map((item) => {
        topSongs.push(item.id);
        return {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          image: makeImages(item.image),
          year: item.year,
          apiUrl: {
            song: `${this.baseApiUrl}/songs?id=${item.id}`,
            album: `${this.baseApiUrl}/album?id=${item.more_info.album_id}`,
          },
        };
      }),
      topAlbums: unmodifiedRes.topAlbums.map((item) => {
        return {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          image: makeImages(item.image),
          year: item.year,
          apiUrl: {
            album: `${this.baseApiUrl}/album?id=${item.id}`,
          },
        };
      }),
      dedicatedPlaylist: unmodifiedRes.dedicated_artist_playlist.map((item) => {
        return {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          image: item.image,
          year: item.year,
          apiUrl: {
            playlist: `${this.baseApiUrl}/playlist?id=${item.id}`,
          },
        };
      }),
      featuredPlaylist: unmodifiedRes.featured_artist_playlist.map((item) => {
        return {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          image: item.image,
          year: item.year,
          apiUrl: {
            playlist: `${this.baseApiUrl}/playlist?id=${item.id}`,
          },
        };
      }),
      singles: unmodifiedRes.singles.map((item) => {
        return {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          image: makeImages(item.image),
          year: item.year,
          apiUrl: {
            album: `${this.baseApiUrl}/album?id=${item.id}`,
          },
        };
      }),
      apiUrl: {
        getTopSongs: `${this.baseApiUrl}/songs?id=${topSongs.join(",")}`,
      },
    };
    return modifiedRes;
  }
}

export default MainWorker;
