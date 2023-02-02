import React from "react";
export default function LibraryList({
  songLists,
  currentSong,
  setCurrentSong,
  songs,
  audiograb,
  setSongs,
  id,
}) {
  const selectHandler = () => {
    const selectedSongs = songs.filter((singles) => singles.id === id);
    setCurrentSong(selectedSongs[0]);
    const actvieSongs = songs.map((singleSongs) => {
      if (singleSongs.id === selectedSongs[0].id) {
        return {
          ...singleSongs,
          active: true,
        };
      } else {
        return {
          ...singleSongs,
          active: false,
        };
      }
    });
    setSongs(actvieSongs);
  };

  return (
    <div
      className={`library-song ${songLists.active ? "selected" : ""}`}
      onClick={selectHandler}
    >
      <img src={songLists.cover} alt="album cover" />
      <div className="song-description">
        <h2>{songLists.name}</h2>
        <h3>{songLists.artist}</h3>
      </div>
    </div>
  );
}
