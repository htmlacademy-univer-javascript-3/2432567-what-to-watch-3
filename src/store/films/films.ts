import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films.ts';
import { Genre } from '../../types.ts';
import { fetchFilm, fetchFilmPromo, fetchFilms } from '../api-action.ts';

type initialStateProps = {
  genres: string[];
  activeGenre: Genre;
  film: FilmType | null | undefined;
  shownFilms: FilmInListType[];
  films: FilmInListType[];
  filmPromo: FilmPromoType | null;
  similarFilms: FilmInListType[];
  countShownFilms: number;
  statusLoading: boolean;
  hasError: boolean;
}

const initialState: initialStateProps = {
  genres: [],
  activeGenre: 'All genres',
  film: null,
  shownFilms: [],
  films: [],
  filmPromo: null,
  similarFilms: [],
  countShownFilms: 8,
  statusLoading: false,
  hasError: false,
};

const pending = (state: initialStateProps) => {
  state.statusLoading = true;
  state.hasError = false;
};

const rejected = (state: initialStateProps) => {
  state.statusLoading = false;
  state.hasError = true;
};

const { reducer: filmsReducer, actions: filmsActions } = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    addShownFilmsAction: (state) => {
      state.countShownFilms += 8;
    },
    defaultShownFilmsAction: (state) => {
      state.shownFilms = state.films;
    },
    defaultCountShownFilmsAction: (state) => {
      state.countShownFilms = 8;
    },
    setActiveGenreAction: (state, action: PayloadAction<Genre>) => {
      state.activeGenre = action.payload;
      state.shownFilms = action.payload === 'All genres' ? state.films : state.films.filter((film) => film.genre === action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, pending)
      .addCase(fetchFilms.rejected, rejected)
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.shownFilms = action.payload;

        const genres = new Set<Genre>(['All genres']);
        action.payload.forEach((film: FilmInListType) => genres.add(film.genre));
        state.genres = Array.from(genres).slice(0, 9);

        state.statusLoading = false;

      })
      .addCase(fetchFilmPromo.pending, pending)
      .addCase(fetchFilmPromo.rejected, rejected)
      .addCase(fetchFilmPromo.fulfilled, (state, action) => {
        state.filmPromo = action.payload;

        state.statusLoading = false;
      })
      .addCase(fetchFilm.pending, pending)
      .addCase(fetchFilm.rejected, rejected)
      .addCase(fetchFilm.fulfilled, (state, action) => {
        const { film, similarFilms } = action.payload;
        state.film = film;
        state.shownFilms = similarFilms;

        state.statusLoading = false;
      });
  },
});

export { filmsReducer, filmsActions };
