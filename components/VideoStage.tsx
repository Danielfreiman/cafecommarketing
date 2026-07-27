"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function VideoStage({
  poster,
  label,
  className = "",
  src,
}: {
  poster: string;
  label: string;
  className?: string;
  src?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!src || !rootRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [src]);

  const toggle = async () => {
    if (!src || !videoRef.current) return;
    if (videoRef.current.paused) {
      await videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`video-stage ${className}`} ref={rootRef}>
      {src ? (
        <video
          ref={videoRef}
          poster={poster}
          preload="none"
          muted
          loop
          playsInline
          controls={playing}
          aria-label={label}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      ) : (
        <Image src={poster} alt="" fill sizes="(max-width: 768px) 100vw, 70vw" />
      )}
      <button type="button" className="play-button" onClick={toggle} aria-label={`Reproduzir ${label}`}>
        <span aria-hidden="true">▶</span>
        <small>{src ? (playing ? "PAUSAR" : "DAR PLAY") : "SHOWREEL EM BREVE"}</small>
      </button>
      <div className="video-chrome" aria-hidden="true">
        <span>00:00</span>
        <i />
        <span>01:18</span>
      </div>
    </div>
  );
}
