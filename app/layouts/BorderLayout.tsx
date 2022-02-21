import React, { useState, useEffect } from 'react';
export default function BorderLayout({ color }: { color: string }) {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    const heightToHideFrom = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const onClickScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  return (
    <React.Fragment>
      <div
        className="fixed top-0 left-0 w-4 h-screen z-30 md:w-8"
        style={{ background: `${color}` }}
      />
      <div
        className="fixed top-0 left-0 w-screen h-4 z-30 md:h-8"
        style={{ background: `${color}` }}
      />
      <div
        className="fixed top-0 right-0 w-4 h-screen z-30 md:w-8"
        style={{ background: `${color}` }}
      />
      <div
        className="fixed bottom-0 left-0 w-screen h-4 z-30 md:h-8"
        style={{ background: `${color}` }}
      />
      <div className={`fixed bottom-20 right-9 w-9 h-9 rounded-md md:rounded-lg z-30 cursor-pointer bg-sky-300 flex justify-center items-center hover:bg-sky-500 md:w-16 md:h-16 md:bottom-32 md:right-20 transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`} onClick={onClickScrollToTop}>
          <img
            src="/images/arrow-up-1.png"
            alt="something"
            className='w-3 md:w-5'
          />
        </div>
    </React.Fragment>
  );
}
