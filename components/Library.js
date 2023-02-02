import React from "react";
import LibraryList from "./LibraryList";
export default function Library({
  toggle,
  setToggle,
  setSongs,
  audioGrab,
  songs,
  currentSong,
  setCurrentSong,
}) {
  return (
    <div className={`library ${toggle ? "library-active" : ""}`}>
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibraryList
            audiograb={audioGrab}
            songs={songs}
            songLists={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
}
