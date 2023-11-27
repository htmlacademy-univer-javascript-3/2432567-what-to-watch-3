import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppRoute } from '../../const';
import { FilmType } from '../../schemas/films';
import { useCallback, useEffect, useRef, useState } from 'react';
import NotFoundPage from '../not-found-page/not-found-page';
import { fetchFilm } from '../../store/api-action';
import { getErrorFilm, getFilm } from '../../store/films/selectors';
import Loading from '../../components/loading/loading';
import ProgressBar from '../../components/progress-bar/progress-bar';
import PauseButton from '../../components/pause-btn/pause-btn';
import PlayButton from '../../components/play-btn/play-btn';
import FullScreenButton from '../../components/full-screen-btn/full-screen-btn';

function PlayerPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm) as FilmType;
  const error = useAppSelector(getErrorFilm) as boolean;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getCurrentTimeFilm = (): number => {
    const playerElement = videoRef.current;
    if (!playerElement) {
      return 0;
    }
    return playerElement.currentTime;
  };


  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handlerTimeUpdate = () => {
    setCurrentTime(getCurrentTimeFilm());
  };

  const handlePlayPauseClick = useCallback(() => {
    const playerElement = videoRef.current;
    if (!playerElement) {
      return;
    }

    if (playerElement.paused) {
      playerElement.play();
    } else {
      playerElement.pause();
    }
  }, []);

  const handleFullScreenClick = useCallback(() => {
    const playerElement = videoRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.requestFullscreen();
  }, []);

  useEffect(() => {
    if (id && id !== film?.id) {
      dispatch(fetchFilm(id));
    }

    const playerElement = videoRef.current;
    if (!playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', () => {
      setDuration(playerElement.duration);
    });
  }, [dispatch, id, film]);

  if (error) {
    return <NotFoundPage />;
  }
  if (film === null) {
    return <Loading />;
  }
  return (
    <div className="player">
      <video
        className="player__video"
        src={film.videoLink}
        poster={film.backgroundImage}
        ref={videoRef}
        onTimeUpdate={handlerTimeUpdate}
      />
      <Link to={`${AppRoute.Film}/${film.id}`} type="button" className="player__exit">
        Exit
      </Link>
      <div className="player__controls">
        <ProgressBar currentTime={currentTime} duration={duration} />
        <div className="player__controls-row">
          {
            !videoRef.current?.paused ? <PauseButton onClick={handlePlayPauseClick} /> : <PlayButton onClick={handlePlayPauseClick} />
          }
          <div className="player__name">{film.name}</div>
          <FullScreenButton onClick={handleFullScreenClick} />
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
