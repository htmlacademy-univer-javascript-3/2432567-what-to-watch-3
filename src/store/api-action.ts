import { AxiosInstance } from 'axios';
import { AppDispatch, FilmInList } from '../types';
import { filmsLoadStatusAction, loadFilmsAction } from './action';
import { APIRoutes } from '../const';

const fetchFilmsAction = () => async (
  dispatch: AppDispatch,
  api: AxiosInstance
) => {
  dispatch(filmsLoadStatusAction(true));
  const { data } = await api.get<FilmInList[]>(APIRoutes.Films);
  dispatch(filmsLoadStatusAction(false));
  dispatch(loadFilmsAction(data));
};

export { fetchFilmsAction };
