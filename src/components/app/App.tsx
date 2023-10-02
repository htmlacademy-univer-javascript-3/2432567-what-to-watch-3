import MainPage from '../../pages/main-page/main-page';
import DataFilm from '../../types/data-film.tsx/data-film';

export default function App({ data }: { data: ReadonlyArray<DataFilm> }) {
  return <MainPage films={data}/>;
}
