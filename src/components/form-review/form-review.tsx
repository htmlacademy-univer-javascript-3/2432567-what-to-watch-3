import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Rating from '../rating/rating';
import { useAppDispatch } from '../../store/hooks';
import { sendReview } from '../../store/api-action/api-action';
import { LENGTH_TEXT_REVIEW } from '../../const';
import { FormDataReview } from '../../schemas/forms';
import { FilmType } from '../../schemas/films';


function FormReview({ film }: { film: FilmType }) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormDataReview>({
    rating: 0,
    reviewText: '',
  });

  const validate = () => formData.rating !== 0 &&
    formData.reviewText.length >= LENGTH_TEXT_REVIEW.MIN &&
    formData.reviewText.length <= LENGTH_TEXT_REVIEW.MAX;

  const handleFieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: name === 'rating' ? Number(value) : value });
    validate();
  };

  const handleFormSubmit: FormEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    if (validate()) {
      dispatch(sendReview({ ...formData, id: film.id }));
    }
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={handleFieldChange} />
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="reviewText"
            id="reviewText"
            placeholder="Review text"
            onChange={handleFieldChange}
            value={formData.reviewText}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              onClick={handleFormSubmit}
              disabled={!validate()}
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
