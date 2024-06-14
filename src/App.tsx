import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pause from './components/icons/Pause';
import Play from './components/icons/Play';
import RightChevron from './components/icons/RightChevron';
import { audioId, fetchedData, videoId } from './utilities/constants';
import { getMedia } from './utilities/helpers';
import Circle from './components/icons/Circle';

function App() {
  const [slideLocation, setSlideLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const [audio, video] = getMedia(audioId, videoId);
    // 'isPlaying' used to prevent error 'user didn't interact with the document first. https://goo.gl/xX8pDD'
    if (isPlaying) {
      audio.play();
      video.play();
    }
  }, [slideLocation, isPlaying]);

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
  const setSlide = (index: number) => {
    setSlideLocation(index);
  };

  return (
    <div className="App">
      <audio
        id={audioId}
        onEnded={() => mediaPlaybackEnded()}
        src={`./audio/${fetchedData[slideLocation]}.m4a`}
      ></audio>
      <main className="App-main flex-col justify-between">
        <div className="flex-col justify-start min-w-full">
          <Header />
          <div
            className="flex-col justify-start z-0 min-w-full"
            id="videoContainer"
          >
            <video
              className={`w-full App-video `}
              id={videoId}
              key={slideLocation}
              muted
              onEnded={() => mediaPlaybackEnded()}
              playsInline
            >
              <source
                src={`./videos/${fetchedData[slideLocation]}.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="flex justify-between min-w-full">
          <div className="flex items-center gap-x-10 m-5 z-10">
            <RightChevron flipHorizontal={true} onClick={slideBackward} />
            {fetchedData.map((slide, index) => (
              <Circle
                color={slideLocation === index ? 'currentColor' : 'gray'}
                key={slide}
                onClick={() => setSlide(index)}
              />
            ))}
            <RightChevron onClick={slideForward} />
          </div>
          <div className="flex items-center gap-x-5 m-5 z-10">
            <p onClick={handlePlayPause}>
              {isPlaying ? <Pause size="size-10" /> : <Play size="size-10" />}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
