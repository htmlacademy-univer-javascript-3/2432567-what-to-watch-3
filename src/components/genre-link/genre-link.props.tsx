import { Genre } from '../../types';

type GenreLinkProps = {
  genre: Genre;
  onClick: (genre: Genre) => void;
  isActiveGenre: boolean;
}

export type { GenreLinkProps };
