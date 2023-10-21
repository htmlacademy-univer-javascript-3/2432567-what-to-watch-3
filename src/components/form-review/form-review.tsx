import { useState } from 'react';
import { Evt, FormData } from './form-review.props';
import Rating from '../rating/rating';


function FormReview() {
  const [formData, setFormData] = useState<FormData>({ rating: '', reviewText: '' });

  const handleFieldChange = (evt: Evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating rating={formData.rating} setRating={handleFieldChange} />
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
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
