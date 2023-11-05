import { Genre } from '../../mocks/genres';

type GenreLinkProps = {
  genre: Genre;
  onClick: (genre: Genre) => void;
  activeGenre: Genre;
}

export type { GenreLinkProps };
