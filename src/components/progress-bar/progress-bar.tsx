import getRemainTime from '../../utils/remain-time';

function ProgressBar({ currentTime, duration }: { currentTime: number; duration: number }): JSX.Element {
  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={currentTime}
          max={duration}
        />
        <div className="player__toggler" style={{ left: `${(currentTime / duration) * 100}%` }}>
          Toggler
        </div>
      </div>
      <div className="player__time-value">{getRemainTime(duration - currentTime)}</div>
    </div>
  );
}

export default ProgressBar;
