"use client";

import React, { useRef, useState } from "react";

export default function Home() {
  // Example video sources (replace with your own local/public videos)
  const videos = [
    {
      label: "Play Santoor",
      src: "/Santoor.mp4",
      type: "video/mp4",
      img: "/santoor.jpg", // Place this image in public/
      desc: "A hammered dulcimer from India, known for its shimmering sound."
    },
    {
      label: "Play Sarod",
      src: "/Sarod.mp4",
      type: "video/mp4",
      img: "/sarod.jpg", // Place this image in public/
      desc: "A fretless stringed instrument, deep and resonant in tone."
    },
    {
      label: "Play Tabla",
      src: "/Tabla.mp4",
      type: "video/mp4",
      img: "/tabla.jpg", // Place this image in public/
      desc: "A pair of hand drums, essential to Indian classical rhythm."
    },
    {
      label: "Play Flute",
      src: "/Flute.mp4",
      type: "video/mp4",
      img: "/flute.jpg", // Place this image in public/
      desc: "A bamboo transverse flute, airy and melodic."
    },
  ];
  // Refs for each video element
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const numVideos = videos.length;

  const goToPrev = () => setCurrent((prev) => (prev - 1 + numVideos) % numVideos);
  const goToNext = () => setCurrent((prev) => (prev + 1) % numVideos);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 w-screen h-screen overflow-hidden">
      <h1 className="text-5xl font-extrabold mb-6 text-center w-full py-6 bg-white/80 shadow-lg z-10 text-pink-600 rounded-b-3xl tracking-wide drop-shadow-lg border-b-4 border-pink-300">
        Music Of India
      </h1>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto relative">
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <button
            onClick={goToPrev}
            className="p-6 rounded-full bg-pink-400 hover:bg-pink-500 text-4xl font-extrabold text-white shadow-lg border-4 border-pink-300 active:scale-90 transition-all"
            aria-label="Previous Instrument"
            style={{ minWidth: 80, minHeight: 80 }}
          >
            &#8592;
          </button>
          <span className="text-2xl text-pink-700 font-bold bg-white/70 px-6 py-2 rounded-2xl shadow border-2 border-pink-200">
            {current + 1} / {numVideos}
          </span>
          <button
            onClick={goToNext}
            className="p-6 rounded-full bg-pink-400 hover:bg-pink-500 text-4xl font-extrabold text-white shadow-lg border-4 border-pink-300 active:scale-90 transition-all"
            aria-label="Next Instrument"
            style={{ minWidth: 80, minHeight: 80 }}
          >
            &#8594;
          </button>
        </div>
        <div className="w-full flex flex-col items-center border-8 border-yellow-400 rounded-3xl bg-white/90 shadow-2xl p-8 transition-all duration-300" style={{ minHeight: 500 }}>
          <img
            src={videos[current].img}
            alt={videos[current].label.replace('Play ', '') + ' image'}
            className="w-56 h-56 object-contain rounded-full border-8 border-blue-300 bg-white mb-4 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
            onClick={() => {
              const v = videoRefs.current[current];
              if (v) {
                if (v.paused) {
                  v.currentTime = 0;
                  v.play();
                } else {
                  v.pause();
                }
              }
            }}
            style={{ boxShadow: '0 0 0 8px #fff, 0 4px 24px 0 #a0aec0' }}
          />
          <h3 className="text-3xl font-extrabold mt-4 mb-2 text-center text-blue-600 drop-shadow-lg tracking-wide">
            {videos[current].label.replace('Play ', '')}
          </h3>
          <div className="text-2xl text-pink-700 mb-6 text-center font-semibold drop-shadow">
            {videos[current].desc}
          </div>
          <div className="w-full aspect-video bg-blue-200 rounded-2xl border-4 border-blue-400 flex items-center justify-center max-w-3xl shadow-lg">
            <video
              ref={el => {
                videoRefs.current[current] = el;
              }}
              className="w-full h-full object-contain rounded-2xl"
              src={videos[current].src}
              playsInline
              preload="none"
              tabIndex={-1}
              aria-label={videos[current].label}
              controls={false}
              style={{ background: '#fff' }}
            />
          </div>
          <div className="mt-6 text-lg text-yellow-700 font-bold text-center animate-bounce">
            Tap the picture to play or pause the music!
          </div>
        </div>
      </div>
    </div>
  );
}
