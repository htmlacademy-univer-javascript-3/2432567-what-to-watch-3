import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../store/hooks';
import { Film } from '../../types';

function MyListPage(): JSX.Element {
  const films = useAppSelector((state) => state.films) as Film[];

  return (
    <div className="user-page">
      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
