import { useAppDispatch } from '../../hooks/genres';
import { showMoreFilmsAction } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          dispatch(showMoreFilmsAction());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
