import React, { useState,useRef} from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/app.scss"
import data from './util'
function App() {
  const [songs,setSongs] = useState(data())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [toggle,setToggle] = useState(false)
  const audioGrab = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const songDuration = e.target.duration;
    setSongTime({
      ...songTime,
      currentTime: current,
      duration: songDuration,
    });
  };
  return (
    <div className="App">
      <Nav
        toggle = {toggle}
        setToggle = {setToggle}
      />
      <Song 
       songs = {songs}
       currentSong = {currentSong}
       setCurrentSong = {setCurrentSong} 
        />
      <Player songs = {songs}setCurrentSong={setCurrentSong} currentSong = {currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioGrab={audioGrab} songTime={songTime} setSongTime={setSongTime} />
      <Library
       setSongs={setSongs}
       songs = {songs}
       currentSong = {currentSong}
       setCurrentSong = {setCurrentSong}
       audioGrab={audioGrab}
       toggle = {toggle}
       setToggle = {setToggle}
      />
      <audio
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioGrab}
      ></audio>
    </div>
  );
}

export default App;
