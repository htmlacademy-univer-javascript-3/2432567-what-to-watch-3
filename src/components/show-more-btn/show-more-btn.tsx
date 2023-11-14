import { useAppDispatch } from '../../store/hooks';
import { addShownFilmsAction } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          dispatch(addShownFilmsAction());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
