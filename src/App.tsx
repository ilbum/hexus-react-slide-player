import { useEffect, useState } from 'react';
import './App.css';
import ControlsSecondSection from './components/ControlsSecondSection';
import ControlsFirstSection from './components/ControlsFirstSection';
import ControlsRow from './components/ControlsRow';
import Header from './components/Header';
import ArrowUTurn from './components/icons/ArrowUTurn';
import Circle from './components/icons/Circle';
import Pause from './components/icons/Pause';
import Play from './components/icons/Play';
import RightChevron from './components/icons/RightChevron';
import SpeakerMuted from './components/icons/SpeakerMuted';
import SpeakerWave from './components/icons/SpeakerWave';
import { audioId, fetchedData, videoId } from './utilities/constants';
import { getMedia } from './utilities/helpers';

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideLocation, setSlideLocation] = useState(0);

  // --- Media Control Logic
  useEffect(() => {
    const [audio, video] = getMedia(audioId, videoId);

    if (isPlaying) {
      // Audio is finished, video is not finished
      if (
        audio.currentTime === audio.duration &&
        video.currentTime !== video.duration
      ) {
        video.play();
      }
      // Audio is not finished, video is finished
      else if (
        audio.currentTime !== audio.duration &&
        video.currentTime === video.duration
      ) {
        audio.play();
      } else {
        audio.play();
        video.play();
      }
    } else {
      audio.pause();
      video.pause();
    }
  }, [isPlaying, slideLocation]);

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

  const pauseAudio = () => {
    const audio = document.getElementById(audioId) as HTMLAudioElement;
    audio.muted = isMuted ? false : true;
    setIsMuted(!isMuted);
  };

  const stopMedia = () => {
    const [audio, video] = getMedia(audioId, videoId);
    audio.currentTime = 0;
    video.currentTime = 0;
    setIsPlaying(false);
  };

  // ---- Slide Navigation Logic
  const navigateToSlide = (index: number) => {
    setSlideLocation(index);
  };

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
      <main className="main flex-col justify-between">
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

        <ControlsRow>
          <ControlsFirstSection>
            <RightChevron flipHorizontal={true} onClick={slideBackward} />
            {fetchedData.map((slide, index) => (
              <Circle
                color={slideLocation === index ? 'currentColor' : 'gray'}
                key={slide}
                onClick={() => navigateToSlide(index)}
              />
            ))}
            <RightChevron onClick={slideForward} />
          </ControlsFirstSection>
          <ControlsSecondSection>
            <p onClick={stopMedia}>
              <ArrowUTurn />
            </p>
            <p onClick={pauseAudio}>
              {isMuted ? <SpeakerMuted /> : <SpeakerWave />}
            </p>
            <p onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause /> : <Play />}
            </p>
          </ControlsSecondSection>
        </ControlsRow>
      </main>

      <audio
        id={audioId}
        onEnded={() => mediaPlaybackEnded()}
        src={`./audio/${fetchedData[slideLocation]}.m4a`}
      ></audio>
    </div>
  );
}

export default App;
