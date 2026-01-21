"use client";

import { useState } from "react";

interface DownloadButtonsProps {
  appStoreLabel: string;
  appStore: string;
  playStoreLabel: string;
  playStore: string;
  comingSoon: string;
}

export function DownloadButtons({
  appStoreLabel,
  appStore,
  playStoreLabel,
  playStore,
  comingSoon,
}: DownloadButtonsProps) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 font-medium">
          <span className="text-xl">🚀</span>
          {comingSoon}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={handleClick}
          className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-xl cursor-pointer"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-75">{appStoreLabel}</div>
            <div className="text-lg font-bold -mt-1">{appStore}</div>
          </div>
        </button>
        <button
          onClick={handleClick}
          className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-xl cursor-pointer"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-75">{playStoreLabel}</div>
            <div className="text-lg font-bold -mt-1">{playStore}</div>
          </div>
        </button>
      </div>
    </>
  );
}

export function NavDownloadButton({
  label,
  comingSoon,
}: {
  label: string;
  comingSoon: string;
}) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 font-medium">
          <span className="text-xl">🚀</span>
          {comingSoon}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="bg-gimu-primary hover:bg-gimu-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-gimu-primary/20 cursor-pointer"
      >
        {label}
      </button>
    </>
  );
}

export function HeroDownloadButton({
  label,
  comingSoon,
}: {
  label: string;
  comingSoon: string;
}) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 font-medium">
          <span className="text-xl">🚀</span>
          {comingSoon}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="bg-gimu-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gimu-primary/30 flex items-center gap-2 cursor-pointer"
      >
        {label}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </>
  );
}
