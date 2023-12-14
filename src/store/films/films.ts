import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { FilmPromoType, FilmType } from '../../schemas/films.ts';
import { Genre } from '../../types.ts';
import { addFavoriteFilm, dropFavoriteFilm, fetchFavoriteFilms, fetchFilm, fetchFilmPromo, fetchFilms } from '../api-action/api-action.ts';
import { initialStateProps } from './films.props.ts';
import findGenres from '../../utils/get-genres.ts';

const initialState: initialStateProps = {
  genres: [],
  activeGenre: 'All genres',
  film: null,
  films: [],
  filmPromo: null,
  similarFilms: [],
  favoriteFilms: [],
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
        state.genres = findGenres(action.payload);
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