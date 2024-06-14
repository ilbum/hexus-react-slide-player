import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pause from './components/icons/Pause';
import Play from './components/icons/Play';
import RightArrow from './components/icons/RightArrow';
import { audioId, fetchedData, videoId } from './utilities/constants';
import { getMedia } from './utilities/helpers';

function App() {
  const [slideLocation, setSlideLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoContainerHeight, setVideoContainerHeight] = useState(0);

  const ref = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    // Prevent height 'flickering' from resize and rerendering
    const divVideoContainer = ref.current;
    setVideoContainerHeight(divVideoContainer.offsetHeight);
    console.log(
      `divVideoContainer.offsetHeight`,
      divVideoContainer.offsetHeight
    );

    const [audio, video] = getMedia(audioId, videoId);
    // 'isPlaying' used to prevent error 'user didn't interact with the document first. https://goo.gl/xX8pDD'
    if (isPlaying) {
      audio.play();
      video.play();
    }
  }, [slideLocation, isPlaying, videoContainerHeight]);

  // ---- Helpers
  const handlePlayPause = () => {
    const [audio, video] = getMedia(audioId, videoId);
    // TODO extra logic if for whichever is longer not to play from the start while the other media is finishing
    if (!isPlaying) {
      audio.play();
      video.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      video.pause();
      setIsPlaying(false);
    }
  };

  const mediaPlaybackEnded = () => {
    const [audio, video] = getMedia(audioId, videoId);
    const longestDuration =
      audio.duration > video.duration ? audio.duration : video.duration;
    const currentTime =
      audio.duration > video.duration ? audio.currentTime : video.currentTime;
    if (longestDuration === currentTime) {
      if (fetchedData.length > slideLocation + 1) {
        setSlideLocation(slideLocation + 1);
      }
    }
  };

  // ---- Slide Navigation
  const slideBackward = () => {
    if (slideLocation > 0) {
      setSlideLocation(slideLocation - 1);
    }
  };
  const slideForward = () => {
    if (fetchedData.length > slideLocation + 1) {
      setSlideLocation(slideLocation + 1);
    }
  };

  return (
    <div className="App">
      <audio
        id={audioId}
        onEnded={() => mediaPlaybackEnded()}
        src={`./audio/${fetchedData[slideLocation]}.m4a`}
      ></audio>
      {/* TOOD slide styling */}
      <main className="App-main flex-col justify-between">
        <Header />
        <div className="flex-col justify-start z-0" id="videoContainer">
          <video
            ref={ref}
            // className="w-full"
            id={videoId}
            key={slideLocation}
            muted
            onEnded={() => mediaPlaybackEnded()}
            playsInline
            // style={{ minHeight: 100 }}
          >
            <source
              src={`./videos/${fetchedData[slideLocation]}.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex-col">
          <div className="flex justify-center gap-x-10 m-5 z-10">
            <RightArrow flipHorizontal={true} onClick={slideBackward} />
            <p onClick={handlePlayPause}>{isPlaying ? <Pause /> : <Play />}</p>
            <RightArrow onClick={slideForward} />
          </div>
          <div className="flex justify-center gap-x-10 m-5 z-10">
            {/* TODO slider */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
