import { useAppDispatch } from '../../store/hooks';
import { filmsActions } from '../../store/films/films';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          dispatch(filmsActions.addShownFilmsAction());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
