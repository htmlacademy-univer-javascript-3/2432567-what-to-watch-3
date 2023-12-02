import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films.ts';
import { Genre } from '../../types.ts';
import { addFavoriteFilm, dropFavoriteFilm, fetchFavoriteFilms, fetchFilm, fetchFilmPromo, fetchFilms } from '../api-action.ts';

type initialStateProps = {
  genres: string[];
  activeGenre: Genre;
  film: FilmType | null | undefined;
  films: FilmInListType[];
  filmPromo: FilmPromoType | null;
  similarFilms: FilmInListType[];
  favoriteFilms: FilmInListType[];
  countShownFilms: number;
  hasError: boolean;
}

const initialState: initialStateProps = {
  genres: [],
  activeGenre: 'All genres',
  film: null,
  films: [],
  filmPromo: null,
  similarFilms: [],
  favoriteFilms: [],
  countShownFilms: 8,
  hasError: false,
};

const pending = (state: initialStateProps) => {
  state.hasError = false;
};

const rejected = (state: initialStateProps) => {
  state.hasError = true;
};

const { reducer: filmsReducer, actions: filmsActions } = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {

    defaultGenreAction: (state) => {
      state.activeGenre = 'All genres';
    },
    defaultCountShownFilmsAction: (state) => {
      state.countShownFilms = 8;
    },
    setActiveGenreAction: (state, action: PayloadAction<Genre>) => {
      state.activeGenre = action.payload;
    },
    setFavoriteFilmAction: (state, action: PayloadAction<{ film: FilmType | FilmPromoType; isFavorite: boolean }>) => {
      if (state.filmPromo?.id === action.payload.film.id) {
        state.filmPromo.isFavorite = action.payload.isFavorite;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, pending)
      .addCase(fetchFilms.rejected, rejected)
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;

        const genres = new Set<Genre>(['All genres']);
        action.payload.forEach((film: FilmInListType) => genres.add(film.genre));
        state.genres = Array.from(genres).slice(0, 9);
      })
      .addCase(fetchFilmPromo.pending, pending)
      .addCase(fetchFilmPromo.rejected, rejected)
      .addCase(fetchFilmPromo.fulfilled, (state, action) => {
        state.filmPromo = action.payload;
      })
      .addCase(fetchFilm.pending, pending)
      .addCase(fetchFilm.rejected, rejected)
      .addCase(fetchFilm.fulfilled, (state, action) => {
        const { film, similarFilms } = action.payload;
        state.film = film;
        state.similarFilms = similarFilms;
      })
      .addCase(fetchFavoriteFilms.pending, pending)
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms = [];
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(addFavoriteFilm.fulfilled, (state, action) => {
        state.favoriteFilms.push(action.payload);
      })
      .addCase(dropFavoriteFilm.fulfilled, (state, action) => {
        state.favoriteFilms = state.favoriteFilms.filter((film) => film.id !== action.payload.id);
      });
  },
});

export { filmsReducer, filmsActions };
