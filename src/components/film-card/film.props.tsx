import { Film } from '../../types';

type FilmCardProps = {
  film: Film;
  isPlaying: boolean;
  onMouseOver: (film: Film) => void;
  onMouseOut: () => void;
}

export type { FilmCardProps };
