import { FilmInListType } from '../../types';

type FilmCardProps = {
  film: FilmInListType;
  isPlaying: boolean;
  onMouseOver: (film: FilmInListType) => void;
  onMouseOut: () => void;
}

export type { FilmCardProps };
