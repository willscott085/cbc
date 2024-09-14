"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import pauseButton from "../../../public/audio-player/pause-button.svg";
import playButton from "../../../public/audio-player/play-button.svg";
import skipButton from "../../../public/audio-player/skip-button.svg";
import volumeIcon from "../../../public/audio-player/volume-icon.svg";
import volumeMutedIcon from "../../../public/audio-player/volume-muted-icon.svg";

interface Props {
  src?: string;
  metadata?: string;
  title?: string;
}

export default function AudioPlayer(props: Props) {
  const { src, metadata, title = "Please select a sermon" } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(100);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | null>(null);
  const volumeRef = useRef<number | null>(null);

  const whilePlaying = () => {
    if (audioPlayerRef.current && progressBarRef.current) {
      progressBarRef.current.value = String(audioPlayerRef.current.currentTime);
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changePlayerCurrentTime = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.setProperty(
        "--seek-before-width",
        `${(+progressBarRef.current.value / duration) * 100}%`,
      );
      setCurrent(+progressBarRef.current.value);
    }
  };

  const handlePlayButtonClick = () => {
    setIsPlaying((p) => {
      const isToggled = !p;

      if (isToggled) {
        audioPlayerRef.current?.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayerRef.current?.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }

      return isToggled;
    });
  };

  const handleBackButtonClick = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime -= 30;
    }
  };

  const handleForwardButtonClick = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime += 30;
    }
  };

  const handleVolumeMuteButtonClick = () => {
    if (audioPlayerRef.current) {
      setIsMuted((m) => {
        if (audioPlayerRef.current && volumeRef.current) {
          if (m) {
            audioPlayerRef.current.volume = volumeRef.current / 100;
          } else {
            audioPlayerRef.current.volume = 0;
          }
        }
        return !m;
      });
    }
  };

  const calulateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = +value;
      changePlayerCurrentTime();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setVolume(+value);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.volume = +value / 100;
      volumeRef.current = +value / 100;
    }
  };

  useEffect(() => {
    if (audioPlayerRef.current?.duration && progressBarRef.current) {
      const seconds = Math.floor(audioPlayerRef.current.duration);
      progressBarRef.current.max = String(seconds);
      volumeRef.current = audioPlayerRef.current.volume * 100;
      setDuration(+calulateTime(seconds));
      setVolume(audioPlayerRef.current.volume * 100);
    }
  }, [audioPlayerRef?.current?.readyState]);

  return (
    <div className="relative flex flex-col gap-3 p-3">
      <audio ref={audioPlayerRef} preload="metadata" src={src} />
      <div className="flex gap-3">
        <div className="flex w-max items-center justify-between gap-3">
          <button onClick={handleBackButtonClick}>
            <Image
              src={skipButton}
              alt="Back 30 seconds"
              className="transition-transform hover:scale-125"
            />
          </button>
          <button onClick={handlePlayButtonClick}>
            {isPlaying ? (
              <Image
                className="transition-transform hover:scale-125"
                src={pauseButton}
                alt="Pause button"
              />
            ) : (
              <Image
                className="transition-transform hover:scale-125"
                src={playButton}
                alt="Play button"
              />
            )}
          </button>
          <button onClick={handleForwardButtonClick}>
            <Image
              className="rotate-180 transition-transform hover:scale-125"
              src={skipButton}
              alt="Forward 30 seconds"
            />
          </button>
        </div>
        <div className="flex flex-col justify-between text-body">
          <div className="text-xs font-bold">NOW PLAYING</div>
          <div className="text-lg text-primary">{title}</div>
          <div className="text-xs">{metadata}</div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-grow items-center justify-between gap-3">
          <div className="font-display text-xs font-bold">
            {calulateTime(current)}
          </div>
          <div className="flex flex-grow items-center">
            <input
              id="default-range"
              ref={progressBarRef}
              type="range"
              min={0}
              max={100}
              step={1}
              value={current}
              onChange={handleRangeChange}
              className="volume-slider"
            />
          </div>
          <div className="font-display text-xs font-bold">
            {duration ? duration : "00:00"}
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-center">
            <button onClick={handleVolumeMuteButtonClick}>
              {isMuted ? (
                <Image
                  className="transition-transform hover:scale-125"
                  src={volumeMutedIcon}
                  alt="Click to unmute "
                />
              ) : (
                <Image
                  className="transition-transform hover:scale-125"
                  src={volumeIcon}
                  alt="Click to mute"
                />
              )}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <input
              id="default-range"
              type="range"
              min={0}
              max={100}
              step={10}
              className="volume-slider"
              onChange={handleVolumeChange}
              value={isMuted ? 0 : volume}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
