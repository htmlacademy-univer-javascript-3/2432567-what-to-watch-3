import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Rating from '../rating/rating';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sendReview } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FormDataReview } from '../../schemas/forms';
import { FilmType } from '../../schemas/films';


function FormReview() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film) as FilmType;
  const [formData, setFormData] = useState<FormDataReview>({
    rating: 0,
    reviewText: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handlerValidate = () => {
    setIsValid(
      formData.rating !== 0 && formData.reviewText.length >= 50 && formData.reviewText.length <= 400
    );
  };

  const handlerFieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: name === 'rating' ? Number(value) : value });
    handlerValidate();
  };

  const handlerSubmit: FormEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    if (isValid) {
      dispatch(sendReview({ ...formData, id: film.id }));
      navigate(`${AppRoute.Film}/${film.id}`);
    }
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={handlerFieldChange} />
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="reviewText"
            id="reviewText"
            placeholder="Review text"
            onChange={handlerFieldChange}
            value={formData.reviewText}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              onClick={handlerSubmit}
              disabled={!isValid}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
