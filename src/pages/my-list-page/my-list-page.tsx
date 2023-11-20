import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';

function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
