const genres = [
  'All genres',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Romance',
  'Thriller',
];

type Genre = typeof genres[0]
type Genres = typeof genres;
export type { Genre, Genres };
export default genres;
