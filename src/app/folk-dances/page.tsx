"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function ClassicalDances() {
    const classicalDances = [
        {
            label: "Bharatanatyam",
            src: "/Bharatnatyam.mp4",
            type: "video/mp4",
            img: "/bharatnatyam.jpg",
            desc: "A classical dance from Tamil Nadu, known for its grace and intricate footwork."
        },
        {
            label: "Kuchipudi",
            src: "/Kuchipudi.mp4",
            type: "video/mp4",
            img: "/kuchipudi.jpg",
            desc: "A graceful dance from Andhra Pradesh, known for its storytelling."
        },
        {
            label: "Kathakali",
            src: "/Kathakali.mp4",
            type: "video/mp4",
            img: "/kathakali.jpg",
            desc: "A classical dance-drama from Kerala, famous for its elaborate costumes and makeup."
        },
        {
            label: "Mohiniyattam",
            src: "/Mohiniyattam.mp4",
            type: "video/mp4",
            img: "/mohiniyattam.jpg",
            desc: "A graceful dance from Kerala, characterized by its gentle movements and feminine grace."
        }
    ];
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [current, setCurrent] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const numDances = classicalDances.length;

    const goToPrev = () => setCurrent((prev) => (prev - 1 + numDances) % numDances);
    const goToNext = () => setCurrent((prev) => (prev + 1) % numDances);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 w-screen h-screen overflow-hidden">
            {/* Burger Menu */}
            <button
                className="fixed top-4 left-4 z-50 p-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-3xl shadow-lg border-4 border-pink-300 focus:outline-none"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Open menu"
            >
                &#9776;
            </button>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 flex flex-col p-6 gap-6 border-r-4 border-pink-300 animate-slide-in">
                    <button
                        className="self-end text-2xl text-pink-500 hover:text-pink-700 font-bold mb-4"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <Link href="/" className="text-xl font-bold text-pink-700 hover:text-pink-900 py-2">Music Of India</Link>
                    <Link href="/folk-dances" className="text-xl font-bold text-pink-700 hover:text-pink-900 py-2">Classical Dances Of India</Link>
                </div>
            )}
            <h1 className="text-5xl font-extrabold mb-6 text-center w-full py-6 bg-white/80 shadow-lg z-10 text-pink-600 rounded-b-3xl tracking-wide drop-shadow-lg border-b-4 border-pink-300">
                Classical Dances Of India
            </h1>
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto relative">
                <div className="w-full flex flex-row items-center justify-between mb-8">
                    <button
                        onClick={goToPrev}
                        className="p-6 rounded-full bg-pink-400 hover:bg-pink-500 text-4xl font-extrabold text-white shadow-lg border-4 border-pink-300 active:scale-90 transition-all"
                        aria-label="Previous Dance"
                        style={{ minWidth: 80, minHeight: 80 }}
                    >
                        &#8592;
                    </button>
                    <span className="text-2xl text-pink-700 font-bold bg-white/70 px-6 py-2 rounded-2xl shadow border-2 border-pink-200">
                        {current + 1} / {numDances}
                    </span>
                    <button
                        onClick={goToNext}
                        className="p-6 rounded-full bg-pink-400 hover:bg-pink-500 text-4xl font-extrabold text-white shadow-lg border-4 border-pink-300 active:scale-90 transition-all"
                        aria-label="Next Dance"
                        style={{ minWidth: 80, minHeight: 80 }}
                    >
                        &#8594;
                    </button>
                </div>
                <div className="w-full flex flex-col items-center border-8 border-yellow-400 rounded-3xl bg-white/90 shadow-2xl p-8 transition-all duration-300" style={{ minHeight: 500 }}>
                    <img
                        src={classicalDances[current].img}
                        alt={classicalDances[current].label + ' image'}
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
                        {classicalDances[current].label}
                    </h3>
                    <div className="text-2xl text-pink-700 mb-6 text-center font-semibold drop-shadow">
                        {classicalDances[current].desc}
                    </div>
                    <div className="w-full aspect-video bg-blue-200 rounded-2xl border-4 border-blue-400 flex items-center justify-center max-w-3xl shadow-lg">
                        <video
                            ref={el => {
                                videoRefs.current[current] = el;
                            }}
                            className="w-full h-full object-contain rounded-2xl"
                            src={classicalDances[current].src}
                            playsInline
                            preload="metadata"
                            tabIndex={-1}
                            aria-label={classicalDances[current].label}
                            controls={false}
                            poster={classicalDances[current].img}
                            style={{ background: '#fff' }}
                        />
                    </div>
                    <div className="mt-6 text-lg text-yellow-700 font-bold text-center animate-bounce">
                        Tap the picture to play or pause the dance video!
                    </div>
                </div>
            </div>
        </div>
    );
}
