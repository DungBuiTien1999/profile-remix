import React from 'react';
export default function BorderLayout({ color }: { color: string }) {
  return (
    <React.Fragment>
      <div
        className="absolute top-0 left-0 w-4 h-screen z-30 md:w-8"
        style={{ background: `${color}` }}
      />
      <div
        className="absolute top-0 left-0 w-screen h-4 z-30 md:h-8"
        style={{ background: `${color}` }}
      />
      <div
        className="absolute top-0 right-0 w-4 h-screen z-30 md:w-8"
        style={{ background: `${color}` }}
      />
      <div
        className="absolute bottom-0 left-0 w-screen h-4 z-30 md:h-8"
        style={{ background: `${color}` }}
      />
    </React.Fragment>
  );
}
