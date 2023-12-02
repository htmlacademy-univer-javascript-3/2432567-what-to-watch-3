/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { PlayPauseButtonProps } from './play-pause-btn.props';

function PlayPauseButton({ onClick, isPlaying }: PlayPauseButtonProps) {
  return (
    <button type="button" className="player__play" onClick={onClick}>
      {isPlaying ? (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      ) : (
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>
      )}
    </button>
  );

}

export default React.memo(PlayPauseButton);
