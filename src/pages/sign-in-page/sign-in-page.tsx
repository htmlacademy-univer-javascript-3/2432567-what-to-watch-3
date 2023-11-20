import { ChangeEvent, FormEventHandler, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { AppRoute } from '../../const';
import { FormData } from '../../types';
import { fetchLogin } from '../../store/api-action';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState(false);

  const handlerValidate = () => {
    setIsValid(
      Boolean(
        formData.email.match(/[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$/) &&
        formData.password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/)
      )
    );
  };

  const handlerFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    handlerValidate();
  };

  const handlerSubmit: FormEventHandler<HTMLButtonElement> = (evt) => { // typing?
    evt.preventDefault();
    if (isValid) {
      dispatch(fetchLogin(formData));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header film-card__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={handlerFieldChange}
                value={formData.email}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={handlerFieldChange}
                value={formData.password}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onSubmit={handlerSubmit}
              onClick={handlerSubmit}
              disabled={!isValid}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
