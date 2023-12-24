import React from 'react';

function FullScreenButtonComponent({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="player__full-screen" onClick={onClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

const FullScreenButton = React.memo(FullScreenButtonComponent);
export default FullScreenButton;
