import { Genre } from '../../types';

type GenreLinkProps = {
  genre: Genre;
  onClick: (genre: Genre) => void;
  activeGenre: Genre;
}

export type { GenreLinkProps };
