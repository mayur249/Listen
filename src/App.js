import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NextButton, PlayPauseButton, PreviousButton } from "./components";
import audios from "./static/audios";
import Wave from "@foobar404/wave";

const App = () => {
  const songRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  const [songTime, setSongTime] = useState(0);
  const [wave] = useState(new Wave());
  const currentSong = audios[currentSongIndex];

  useEffect(() => {
    window.document
      .getElementById("audio_element")
      .addEventListener("loadedmetadata", (e) => {
        console.log("event", e);
        songRef.current = e.target;
      });
    wave.fromElement("audio_element", "canvas_element", {
      type: "flower",
      colors: ["#000", "#fff"],
    });
  }, [wave]);

  const goToNextSong = (value) => {
    const nextSongIndex = currentSongIndex + value;
    const firstSongIndex = 0;
    const lastSongIndex = audios.length - 1;
    if (nextSongIndex >= audios.length) {
      setCurrentSongIndex(firstSongIndex);
    } else if (nextSongIndex < firstSongIndex) {
      setCurrentSongIndex(lastSongIndex);
    } else {
      setCurrentSongIndex(nextSongIndex);
    }
    setHasChanged(true);
    setIsPaused(false);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="image-container">
          <LazyLoadImage
            effect="blur"
            placeholderSrc={currentSong.placeholder}
            src={currentSong.img}
            className={isPaused ? "image" : "image animation-spin"}
          />
          <canvas width="350px" height="350px" id="canvas_element" />
        </div>

        <div className="song-info">
          <h1>{currentSong.songName}</h1>
          <p>{currentSong.singer}</p>
          <audio
            autoPlay={hasChanged}
            onEnded={() => goToNextSong(1)}
            src={currentSong.src}
            id="audio_element"
            onTimeUpdate={() => setSongTime(songRef.current?.currentTime)}
          />
        </div>
        <div>
          <input
            value={songTime}
            type="range"
            min={0}
            max={songRef.current?.duration}
            className="input-range"
            onChange={(e) => (songRef.current.currentTime = e.target.value)}
          />
        </div>
        <div className="controller">
          <PreviousButton goToNextSong={goToNextSong} />
          <PlayPauseButton
            songRef={songRef}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
          />
          <NextButton goToNextSong={goToNextSong} />
        </div>
      </div>
    </div>
  );
};

export default App;
